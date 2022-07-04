"""App module."""
from .api import app
from .config import api
from .api import Predict, GetPrediction

#routes definition
api.add_resource(Predict, '/api/predict', endpoint='Prediction')
api.add_resource(GetPrediction, '/api/prediction', endpoint='Get Prediction')
