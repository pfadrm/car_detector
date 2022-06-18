#!/usr/bin/python3
"""Default configuration settings."""
from dotenv import load_dotenv
from os import environ
load_dotenv('.env')

DEBUG = True
TESTING = False
FILE_SIZE =  16 * 1024 * 1024
LOGGER_NAME = 'api-server'
LOG_FILENAME = 'api-server.log'
UPLOAD_FOLDER = 'static/uploads/'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'webp', 'jfif'])
DB_NAME = "car_predictor"
DB_HOST = environ.get("DB_HOST")
DB_PORT = int(environ.get("DB_PORT"))
MONGODB_SETTINGS = {
        "db": DB_NAME,
        "host": DB_HOST,
        "port": DB_PORT}
