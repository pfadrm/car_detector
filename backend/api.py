#!/usr/bin/python3
"""
API endpoints
"""
import os
from urllib.request import urlopen
import uuid
from flask import Flask, request
from flask_restful import Resource, Api
from werkzeug.utils import secure_filename
from detector import Pred
import requests
import shutil
import urllib

app = Flask(__name__)
api = Api(app)
UPLOAD_FOLDER = 'static/uploads/'
app.secret_key = "secret key"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'webp', 'jfif'])

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


class PredictImage(Resource):
    #Upload image files to server

    def post(self):
        file = request.files['file']
        if 'file' not in request.files:
            return {'No':'File'}
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)
            pred = Pred(file_path)
            result = pred.result
            result['id'] = str(uuid.uuid4())
            return result
        else:
            return {'Image types allowed':'png, jpg, jpeg, webp, jfif'}


class Predict(Resource):
    #Give predictions from db by id
    def get(self):
        pass

api.add_resource(PredictImage, '/predict', endpoint='upload image file')
api.add_resource(Predict, '/prediction/<int:id>', endpoint='predictions')


if __name__ == "__main__":
    app.run(debug=True)
