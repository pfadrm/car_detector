#!/usr/bin/python3
"""Detector module."""
from fastai.vision.all import load_learner
from dotenv import load_dotenv
from os import environ
load_dotenv('.env')
modelpath = environ.get('MODEL')
colorpath = environ.get('COLOR')
if modelpath is None or colorpath is None:
    raise AttributeError("Use os env MODEL and COLOR for models path.")
model = load_learner(modelpath)
color = load_learner(colorpath)
from .detector import Predict
