#!/usr/bin/python3
"""Detector module."""
from os import environ
from fastai.vision.all import load_learner
modelpath = environ.get('MODEL')
if modelpath is None:
    raise AttributeError("Use os env MODEL for model path.")
model = load_learner(modelpath)
from .detector import Predict
