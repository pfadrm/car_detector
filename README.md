# Car Detector AI API 🚗🔍
 
 
![Car Detector](docs/TEST.gif)
 
## Introduction
 
Welcome to Car Detector our End of Foundation Year Portfolio Project for Holberton School Tunis. It is a web application and a car model classification API using Neural Nets.
 
![Logo School](docs/holberton.png)
 
 
## Table of Contents
 
- [The Story](#the-story)
- [Deployed Site](#deployed-site)
- [Blogs](#blogs)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Features](#features)
    - [Github OAuth](#github-oauth)
    - [Job Search](#job-search)
- [Built With](#built-with)
- [API](#api)
- [Future](#future)
- [Authors](#authors)
    - [Dhia Ben Dahmani](#dhia-bendahmani)
    - [Rayen Hedri](#rayen-hedri)
    - [Montassar Barbouchi](#montassar-barbouchi)
    - [Mouna Ben Ali](#mouna-benali)
- [Acknowledgments](#acknowledgements)
 
 
## The Story
 
This project started as an idea between Dhia and Rayen when they thought about their childhood and how they used to try to guess the brands of the passing cars in the streets but could not be sure about it. That is how they thought about bringing Car Detector to life.
 
<b>Car Detector</b> is an AI API that would allow the user to upload a picture of a car(from file or URL), predict its model or brand  and display information about it(brand, model, year and color). The team implemented this API with a precise approach that focuses on asynchronous programming and achieving scalability of the project and separating the service into distinct detached sections, so each section addresses a separate concern. With an Agile approach to Project Management that delivers work in small, but consumable, increments.
 
 
Here is our priority objectives:
- [Having a simple cli app prototype working on a sample of data(Beta)] (#acknowledgements)
2 - Fetching the new data and cleaning it and retraining the model
3 - Creating the AI library with a simple class that returns car predictions when initialized with a picture
4 - Creating a RESTful API  with the library
5 - ORM with database to save the predictions
6 - Creating a creative and user-friendly UI with the front-end
7 - Cleaning the codebase on Github
 
This project will be of great help to users who are looking to identify the brand or model of a particular car, however, it can also be deployed as a component of a surveillance system or a study to identify which cars are more popular. The API can be of service to car enthusiasts, car insurances, car fleet management companies like car dealers or car rentals.
 
 
 
## Deployed site
 
[Please visit our Deployed Website](https://car-detect.systems/)
 
####  Blogs 
 - [Dhia Ben Dahmani](https://medium.com/@dhiadah/car-detector-a-month-long-journey-ea13d8a8cc36)
 - [Rayen Hedri](#rayen-hedri)
 - [Montassar Barbouchi](#montassar-barbouchi)
 - [Mouna Ben Ali](#mouna-benali)
 
[Please visit each team member blog post about the project](https://car-detect.systems/ insert links here )
 
####  Presentation
 
[Please visit our Presentation for Demo Day](https://docs.google.com/presentation/d/10dEp7BPVkv_gFFCBBhhpVIYzz9P5TSZ05xHUIwR1AKM/edit#slide=id.gf45378fd24_0_9)
 
 
#### Authors (LinkedIn & Github) :black_nib:
Thanks goes to these wonderful people
 
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/cryptolake"><img src="https://avatars.githubusercontent.com/u/58823173?v=4" width="100px;" alt=""/><br /><sub><b><a href="https://www.linkedin.com/in/dhia-dahmeni-577a42216">Dhia Ben Dahmeni</b></sub></a><br />
    <a href="#blog-AsianCat54x" title="Project Management, Machine Learning Training & DEVOPS">📆</a>
    <a href="#ideas-MatthiasWanner" title="Ideas, Planning, & Feedback">🤔</a>
    <a href="#ideas-MatthiasWanner" title="Code">💻</a>
    <a href="#ideas-MatthiasWanner" title="Test">⚠️</a>
        <a href="#ideas-MatthiasWanner" title="Bugs">🐛</a>
    <a href="#ideas-MatthiasWanner" title="Infrastructure">🚇</a>
    <a href="#ideas-MatthiasWanner" title="Documentation">📖</a>
    <a href="#ideas-MatthiasWanner" title="Blog">📝</a>
    </td>
    <td align="center"><a href="https://github.com/rayenhdr93"><img src="https://avatars.githubusercontent.com/u/91053565?v=4" width="100px;" alt=""/><br /><sub><b><a href="https://www.linkedin.com/in/rayen-hedri-61ab5221a/">Rayen Hedri</b></sub></a><br />
    <a href="#ideas-MatthiasWanner" title="Web Scraping & Data Cleaning">🔣</a>
    <a href="#ideas-MatthiasWanner" title="Code">💻</a>
    <a href="#ideas-MatthiasWanner" title="Test">⚠️</a>
        <a href="#ideas-MatthiasWanner" title="Bugs">🐛</a>
    <a href="#ideas-MatthiasWanner" title="Documentation">📖</a>
    <a href="#ideas-MatthiasWanner" title="Blog">📝</a>
    </td>
    <td align="center"><a href="https://github.com/MounaBenAli"><img src="https://avatars.githubusercontent.com/u/90987270?v=4" width="100px;" alt=""/><br /><sub><b><a href="https://www.linkedin.com/in/mouna-ben-ali-643bb865/">Mouna Ben Ali</b></sub></a><br />
    <a href="#ideas-MatthiasWanner" title="Back-End">💻</a>
    <a href="#ideas-MatthiasWanner" title="Test">⚠️</a>
    <a href="#ideas-MatthiasWanner" title="Bugs">🐛</a>
    <a href="#ideas-MatthiasWanner" title="Design">🎨</a>
    <a href="#ideas-MatthiasWanner" title="Documentation">📖</a>
    <a href="#ideas-MatthiasWanner" title="Blog">📝</a>
    </td>
    <td align="center"><a href="https://github.com/MontassarBar"><img src="https://avatars.githubusercontent.com/u/91077064?v=4" width="100px;" alt=""/><br /><sub><b><a href="https://www.linkedin.com/in/montassar-barbouchi-391b6b220/">Montassar Barbouchi</b></sub></a><br />
    <a href="#ideas-MatthiasWanner" title="Front-End">🎨</a>
    <a href="#ideas-MatthiasWanner" title="Code">💻</a>
    <a href="#ideas-MatthiasWanner" title="Test">⚠️</a>
        <a href="#ideas-MatthiasWanner" title="Bugs">🐛</a>
    <a href="#ideas-MatthiasWanner" title="Documentation">📖</a>
    <a href="#ideas-MatthiasWanner" title="Blog">📝</a>
    </td>
  </tr>
</table>
 
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
 
<!-- ALL-CONTRIBUTORS-LIST:END -->
 
## Installation
## Usage
## Contributing
## Related projects
### Acknowledgements
 
 
 
 
 
 
 
 
 
 

