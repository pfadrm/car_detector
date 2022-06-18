#!/usr/bin/python3
"""ORM to mongodb."""
import mongoengine as me

class Result(me.EmbeddedDocument):
    """Result of car prediction."""

    brand = me.StringField(required=True)
    model = me.StringField(required=True)
    color = me.StringField(required=True)
    year = me.IntField(required=True)

class Prediction(me.Document):
    """Prediction doc."""

    _id = me.StringField(primary_key=True)
    img_path = me.StringField(required=True)
    result = me.EmbeddedDocumentField(Result)
