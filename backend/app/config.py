#!/usr/bin/python3
"""Default configuration settings."""
from os import environ

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
