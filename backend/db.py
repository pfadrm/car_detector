#!/usr/bin/python3
"""
Save to MongoDB database
"""

import pymongo
from api import *

URI = 'mongodb+srv://MounaDB:mypassword1@cluster0.abbnw.mongodb.net/?retryWrites=true&w=majority'
client = pymongo.MongoClient(URI)
DB = client['pfa']
car_predictions = DB.car_predictions