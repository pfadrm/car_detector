# Car detector Restful Api and models

## Getting the AI models

To setup the api you need to download the models from [here](https://drive.google.com/drive/folders/1NJkb8YEb9degmIYAnoA9bfBKA--SC8qi?usp=sharing) and put them both in the `detector/models` directory and adding these environment variables to `.env` in your backend directory:

```
MODEL='./detector/models/brand.pkl'
COLOR='./detector/models/color.pkl'
```

## Mongodb setup

To setup mongodb run it and setup the environment variables in the `.env` in your backend directory:

```
DB_HOST='127.0.0.1'
DB_PORT=27017
DB_PASS=''
```
