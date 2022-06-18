"""API endpoints."""
import hashlib
from flask import request
from flask_restful import Resource
from werkzeug.utils import secure_filename
from detector import Pred
from app import app, api
from db import Prediction, Result
from pathlib import Path

class Predict(Resource):
    """Prediction endpoint."""

    def check_exist(self):
        """Check if picture hash exists."""
        check = Prediction.objects(_id=self.file_hash)
        if check is None:
            return False
        else:
            return check.first()

    def allowed_file(self):
        """Check if file extension is allowed."""
        return '.' in self.file.filename and self.file.filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

    def post(self):
        """Post request."""
        if 'file' not in request.files:
            return {'ERROR':'NO File'}, 400
        self.file = request.files['file']
        if self.file and self.allowed_file():
            try:
                self.file_path = Path(secure_filename(str(self.file.filename)))
                self.file_path = app.config['UPLOAD_FOLDER'] / self.file_path
                self.file_hash = hashlib.md5(self.file.stream.read()).hexdigest()
                self.file.stream.seek(0)
                check = self.check_exist()
                if check:
                    return check.to_mongo(), 200
                self.file.save(str(self.file_path))
            except Exception as e:
                print(e)
                return {'ERROR': 'SAVING FILE ERROR'}
            try:
                self.result = Pred(self.file_path)
                self.result = self.result.result 
            except Exception as e:
                print(e)
                return {'ERROR':'AI MODEL ERROR'}, 500
            try:
                result = Result(**self.result)
                prediction = Prediction(_id=str(self.file_hash), img_path='/'+str(self.file_path))
                prediction.result = result
                prediction.save()
            except Exception as e:
                print(e)
                return {'ERROR':'DB ERROR'}, 500
            return prediction.to_mongo(), 201
        else:
            return {'Image types allowed':'png, jpg, jpeg, webp, jfif'}, 400


class GetPrediction(Resource):
    """Get prediction from id."""

    def get(self):
        pass

api.add_resource(Predict, '/predict', endpoint='upload image file')
api.add_resource(GetPrediction, '/prediction/<int:id>', endpoint='predictions')


if __name__ == "__main__":
    app.run(debug=True)
