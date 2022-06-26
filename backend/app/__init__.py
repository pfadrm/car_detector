"""App module."""
from flask_restful import Api
from flask_mongoengine import MongoEngine
from mongoengine import connect
from flask_cors import CORS
from flask import Flask
from .config import *

app = Flask(__name__)
app.secret_key = "secret key"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = FILE_SIZE
app.config['ALLOWED_EXTENSIONS'] = ALLOWED_EXTENSIONS
app.config['MONGODB_SETTINGS'] = MONGODB_SETTINGS
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
api = Api(app)
db = MongoEngine(app)
