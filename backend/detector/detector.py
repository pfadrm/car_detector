#!/usr/bin/python3
"""Api to car model detection."""
from . import model, color

class Predict:
    """
    Class to predict car model in image.

    This class acts as an api to the model, it is initialzed
    by the image to detect and it returns results and stats.
    """

    __model = model
    __color = color
    def __init__(self, image):
        """
        Initialize the class.

        image: image to initialize with
        """
        self.__image = image
        self.__brand_prediction = self.__model.predict(image)
        self.__color_prediction = self.__color.predict(image)

    @property
    def result(self):
        """Return result of prediction."""
        return {'brand': self.__brand_prediction[0],
                'color': self.__color_prediction[0]}

    @property
    def brand(self):
        """Return Car brand."""
        return self.__brand_prediction[0]

    @property
    def color(self):
        """Return car Color."""
        return self.__color_prediction[0]

    @property
    def image(self):
        """Return image of car."""
        return self.__image
