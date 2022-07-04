#!/usr/bin/python3
"""Default configuration settings."""
from os import environ
from flask_restful import Api
from flask_mongoengine import MongoEngine
from flask_cors import CORS
from flask import Flask

DEBUG = True
TESTING = False
FILE_SIZE =  16 * 1024 * 1024
LOGGER_NAME = 'api-server'
LOG_FILENAME = 'api-server.log'
UPLOAD_FOLDER = 'static/uploads/'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'webp', 'jfif'])
DB_NAME = environ.get("DB_NAME")
DB_HOST = environ.get("DB_HOST")
DB_PASS = environ.get("DB_PASS")
DB_USER = environ.get("DB_USER")
if environ.get("DB_PORT") == '' or environ.get("DB_PORT") is None:
    DB_PORT = ''
else:
    DB_PORT = int(str(environ.get("DB_PORT")))
MONGODB_SETTINGS = {
        "db": DB_NAME,
        "host": DB_HOST,
        "username": DB_USER,
        "port": DB_PORT,
        "password": DB_PASS}

app = Flask(__name__)
app.secret_key = "secret key"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = FILE_SIZE
app.config['ALLOWED_EXTENSIONS'] = ALLOWED_EXTENSIONS
app.config['MONGODB_SETTINGS'] = MONGODB_SETTINGS
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
api = Api(app)
db = MongoEngine(app)
