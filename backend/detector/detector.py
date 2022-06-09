#!/usr/bin/python3
"""Api to car model detection."""
from . import model

class Predict:
    """
    Class to predict car model in image.

    This class acts as an api to the model, it is initialzed
    by the image to detect and it returns results and stats.
    """

    __model = model
    def __init__(self, image):
        """
        Initialize the class.

        image: image to initialize with
        """
        self.__prediction = self.__model.predict(image)

    @property
    def result(self):
        """Return result of prediction."""
        return self.__prediction[0]
