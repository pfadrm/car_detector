"""API endpoints."""API endpoints."""
import hashlib
from flask import request
from flask_restful import Resource, reqparse
from werkzeug.utils import secure_filename
from detector import Pred
from app import app, api
from db import Prediction, Result
from pathlib import Path

class Predict(Resource):
    """Prediction endpoint."""

    def check_exist(self):
        """Check if picture hash exists."""
        try:
            check = Prediction.objects(_id=self.file_hash)
        except Exception as e:
            print(e)
            return {'ERROR':'DB ERROR'}, 500
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
                self.file.filename = secure_filename(str(self.file.filename))
                extension = self.file.filename.split(".")[1:]
                extension = '.'.join(extension)
                self.file_hash = hashlib.md5(self.file.stream.read()).hexdigest()
                self.file_path = Path(self.file_hash+'.'+extension)
                self.file_path = app.config['UPLOAD_FOLDER'] / self.file_path
                self.file.stream.seek(0)
                check = self.check_exist()
                if check:
                    return check.to_mongo(), 200
                self.file.save(str(self.file_path))
            except Exception as e:
                return {'Error': 'Saving File Error',
                        'Description': str(e)}, 500
            try:
                self.result = Pred(self.file_path)
                self.result = self.result.result
            except Exception as e:
                return {'Error':'AI Model Error',
                        'Description': str(e)}, 500
            try:
                result = Result(**self.result)
                prediction = Prediction(_id=str(self.file_hash), img_path='/'+str(self.file_path))
                prediction.result = result
                prediction.save()
            except Exception as e:
                return {'Error':'DB Error',
                        'Description': str(e)}, 500
            return prediction.to_mongo(), 201
        else:
            return {'Image types allowed':'png, jpg, jpeg, webp, jfif'}, 400


class GetPrediction(Resource):
    """Get Prediction endpoint."""

    def get(self):
        """Get request."""
        parser = reqparse.RequestParser()
        parser.add_argument('id', type=str, location='args')
        args = parser.parse_args()
        id = args.get('id')
        if id:
            try:
                obj = Prediction.objects(_id=id)
            except Exception as e:
                return {'Error':'DB Error',
                        'Description': str(e)}, 500
            if obj is None:
                return {'Error', 'Not found'}, 404
            else:
                obj = obj.first()
                return obj.to_mongo(), 200
        else:
            return {'Error': 'No id'}, 400


api.add_resource(Predict, '/api/predict', endpoint='Prediction')
api.add_resource(GetPrediction, '/api/prediction', endpoint='Get Prediction')
