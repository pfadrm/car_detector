import React, { Component } from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
import axios from "axios"

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			result: null,
			isResponse: false,
			imageAction: false,
			isloading: false
		}
	}

	uploadPicture = (e) => {
		this.setState({
			picturePreview: URL.createObjectURL(e.target.files[0]),
			pictureAsFile: e.target.files[0],
			imageAction: true,
			isResponse: false
		})
	};

	LoadingSpinner = () => {
		if (this.state.isloading === true)
		{
			return (
				<div class="pred-result">
					<div className="spinner-container">
						<div className="loading-spinner">
						</div>
					</div>
					<h3>Detecting...</h3>
				</div>
			);
		}
	}

	setImageAction = () => {
		if (this.state.imageAction === true) {
			this.setState({
				isloading: true
			})
			const Data = new FormData()
			Data.append("file", this.state.pictureAsFile);
			axios.post(`https://${window.location.hostname}/api/predict`, Data)
				.then((response) => {
					console.log(response.data)
					this.setState({
						result: response.data,
						isResponse: true,
						imageAction: false,
						isloading: false
					})
				}).catch((error) => {
					this.setState({
						isloading: false
					})
			});
		}
	};

	checkImage = () => {
		if (this.state.imageAction === true && this.state.isloading === false) {
			return (
				<div class="detect-button">
					<button onClick={this.setImageAction}>
						Detect
					</button>
				</div>
			)
		}
	}

	checkResponse = (data) => {
		if (this.state.isResponse === true) {
			return (
				<div class="pred-result">
					<img src={this.state.picturePreview} alt="" />
					<h4>Brand: {data.result.brand}</h4>
					<p>Color: {data.result.color}</p>
					<p>Model: {data.result.model}</p>
					<p>Year: {data.result.year}</p>
				</div>
			);
		}
	}

	render() {
		return (
			<div class="parent-home">
				<div class="nav-bar">
					<div class='logo'>
						<Link to="/">
							<img src={`https://${window.location.hostname}/static/logo.png`} alt="logo"/>
						</Link>
					</div>
					<div class='links'>
						<Link to="/about">
							<button>
								About
							</button>
						</Link></div>
				</div>
				<div class="main">
					<h1 class="tag">Car Detector With 93% Accuracy!</h1>
					<div class="intro">
						<p><b>Don't Ask  Car Enthusiasts, Ask Us!</b></p>
					</div>
					<div class="demo-class">
						<div class="upload-side">
							<input id='files' type="file" name="image" onChange={this.uploadPicture} />
							{this.checkImage()}
						</div>
						{this.LoadingSpinner()}
						{this.checkResponse(this.state.result)}
					</div>
					<div class="desc-class">
						<h1>FAQ</h1>
						<h2>What is this?</h2>
						<p>we have built an api with <b>93%</b> accuracy on brands,
							It will recognize the year, model and color
							of most cars since 1928.</p>
						<p>You can use our api by choosing a file here and clicking detect or using our api routes!</p>
						<h2>What are the API routes?</h2>
						<h3>POST /api/predict</h3>
						<p>Send an image with the key <b>file</b> on the body of a POST request and you will get prediction in this JSON format:</p>
						<p class="specs"><code>{`{
"_id": "4d19b7a71f57627144fbb28575d4010c",
"img_path": "/static/uploads/images_2.jpeg",
"result": {
"brand": "Bmw",
"model": "3 series sedan",
"color": "black",
"year": 2015
						}`}</code></p>
						<h3> GET /api/prediction?id= </h3>
						<p>Send id in the GET request parameters and you will get the same response with that id.</p>

						<h2>Do we have a Discord bot?</h2>
						<h3>We actually do! check it <a href={`/bot`}>here!</a></h3>
						<p>Type /predict and attach any number of car images to predict</p>
					</div>
				</div>
			</div>
		);
	};
}
export default Home;
