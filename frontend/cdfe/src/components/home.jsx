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
			isImage: false,
			isloading: false,
			isUrl: false,
			Url: null,
			Error: false,
			sizeError: false,
			serverEroor: false,
			clientError: false
		}
	}

	fetchfromurl = (e) => {
		this.setState({
			isUrl: true,
			isResponse: false,
			isImage: false,
			url: e.target.value,
			isloading: false,
			sizeError: false,
			Error: false,
			serverEroor: false,
			clientError: false
		})
		let fileInput = document.getElementById('files');
		fileInput.value = null
	}

	uploadPicture = (e) => {
		this.setState({
			picturePreview: URL.createObjectURL(e.target.files[0]),
			pictureAsFile: e.target.files[0],
			fileSize : e.target.files[0].size,
			isImage: true,
			isUrl: false,
			isResponse: false,
			isloading: false,
			Error: false,
			sizeError: false,
			serverEroor: false,
			clientError: false
		})
		let urlInput = document.getElementById('url');
		urlInput.value = ''
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

	setImageAction = (e) => {
		e.preventDefault();

		this.setState({
			isloading: true
		})

		if (this.state.isImage === true) {
			if (this.state.fileSize > 10000000) {
				this.setState({
						isResponse: false,
						isloading: false,
						isUrl: false,
						isImage: false,
						Error: true,
				})
			}
			const Data = new FormData()
			Data.append("file", this.state.pictureAsFile);
			axios.post(`${window.location.origin}/api/predict`, Data)
				.then((response) => {
					console.log(response.data)
					console.log(response.status)
					this.setState({
						result: response.data,
						isResponse: true,
						isloading: false
					})
				}).catch((error) => {
					this.setState({
						isResponse: false,
						isloading: false,
						isUrl: false,
						isImage: false,
						Error: true,
					})
					if (error.request.status === 400) {
						this.setState({
							clientError: true,
						})
					}
					if (error.request.status === 500) {
						this.setState({
							serverError: true,
						})
					}

			});

		}

		else if (this.state.isUrl === true){
			const Data = new FormData()
			Data.append("url", this.state.url);
			axios.post(`${window.location.origin}/api/predict`, Data)
				.then((response) => {
					this.setState({
						result: response.data,
						picturePreview: response.data.img_path,
						isResponse: true,
						isUrl: false,
						isloading: false
					})
				}).catch((error) => {
					console.log(error);
					this.setState({
						isResponse: false,
						isImage: false,
						isloading: false,
						Error: true,
						isUrl: false
					})
					if (error.request.status === 400) {
						this.setState({
							clientError: true,
						})
					}
					if (error.request.status === 500) {
						this.setState({
							serverError: true,
						})
					}
			});
		}
	};

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
		else if (this.state.sizeError === true) {
			return (
				<div class="pred-result">
					<h4>File size is too big</h4>
				</div>
			)
		}
		else if (this.state.clientError === true) {
			return (
				<div class="pred-result">
					<h4>Image types allowed : png, jpg, jpeg, webp, jfif</h4>
				</div>
			)
		}
		else if (this.state.serverEroor === true) {
			return (
				<div class="pred-result">
					<h4>Opps! We have a problem in our server...</h4>
				</div>
			)
		}
	}


	checkImage = () => {
		if (this.state.isResponse === false && this.state.isloading === false && this.state.Error === false) {
			return (
				<div class="detect-button">
					<button type="submit">
						Detect
					</button>
				</div>
			)
		}
	}

	render() {
		return (
			<div class="parent-home">
				<div class="nav-bar">
					<div class='logo'>
						<Link to="/">
							<img src={`${window.location.origin}/static/logo.png`} alt="logo"/>
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
							<h2>Upload an image or copy the url</h2>
							<form onSubmit={this.setImageAction} method="POST">
								<input class="file-input" id='files' type="file"  onChange={this.uploadPicture} />
								<input class="url-input" id='url' type='text'  placeholder="URL of image" onChange={this.fetchfromurl}/>
								{this.checkImage()}
							</form>
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
						<p>Send an image with the key <b>file</b> or the url with key <b>url</b> on the body of a POST request and you will get prediction in this JSON format:</p>
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
