#!/usr/bin/env python3
from sys import argv
from detector import Predict
import requests

img = requests.get(argv[1])
pre = Predict(img.content)
print(pre.result)
