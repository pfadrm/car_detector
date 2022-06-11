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
        self.image = image
        self.make_prediction(self.image)

    @property
    def prediction(self):
        """Return result of prediction."""
        return {'full': self.__full[0].split(), 'color': self.__color[0]}

    def make_prediction(self, image):
        self.__full = self.__model.predict(image)
        self.__color = self.__color.predict(image)

    @property
    def result(self):
        """Return result of prediction."""
        return {'brand': self.brand, 'color': self.color,
                'model': self.model, 'year': self.year}

    @property
    def brand(self):
        """Return Car brand."""
        return self.prediction['full'][0]

    @property
    def color(self):
        """Return car Color."""
        return self.prediction['color']

    @property
    def model(self):

        return ' '.join(self.prediction['full'][1:-1])

    @property
    def year(self):
        return self.prediction['full'][-1]


    @property
    def image(self):
        """Return image of car."""
        return self.__image

    @image.setter
    def image(self, image):
        self.__image = image
