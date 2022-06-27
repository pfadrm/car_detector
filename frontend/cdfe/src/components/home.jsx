import React, {Component} from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";
import axios from "axios"

class Home extends Component{
	constructor(props) {
        super(props);
        this.state = {
			result: {},
            selectedFile: false,
			imageAction: false
        }
    }
	uploadPicture = (e) => {
		this.setState({
			picturePreview : URL.createObjectURL(e.target.files[0]),
			pictureAsFile : e.target.files[0],
			imageAction: true
		})
	};
	 setImageAction = () => {
		if (this.state.imageAction === true){
	const Data = new FormData()
	Data.append("file", this.state.pictureAsFile);
	axios.post("http://127.0.0.1:5000/predict", Data)
	.then((response) => {
		console.log(response.data)
		this.setState({
			result: response.data,
			selectedFile: true,
			imageAction: false
		})
	}).catch((error) => {
	
	});
}
};
	checkImage = () => {
		if (this.state.imageAction === true){
			return(
				<div>
				<button onClick={this.setImageAction}> 
                  Detect
        </button>
		</div>
			)
			}
	}
	checkResponse = (data) =>{
	if (this.state.selectedFile === true){
	  return(
		<div>
			<img class="absolute inset-x-0 bottom-0 h-16" src={this.state.picturePreview} alt=""/>
		<div class="absolute inset-y-45 right-0 w-35">
		   <h4>Brand: {data.result.brand}</h4>
		   <p>Color: {data.result.color}</p>
		   <p>Model: {data.result.model}</p>
		   <p>Year: {data.result.year}</p>
		</div>
		</div>
	  );
	  }
}
render(){
return (
	<div>
		<div className="bg-gradient-to-tr h-97 w-full relative">
			<img src="https://wallpapershome.com/images/wallpapers/mercedes-benz-cls-2560x1440-2018-cars-red-5k-16619.jpg" alt="car img"
				className="w-full h-full object-cover absolute mix-blend-soft-light"/>
			<div class="absolute left-0 top-0 w-32">
				<img src="https://cdn.discordapp.com/attachments/978934429143683085/990682811906277386/Logo_with_catch_phrase-removebg-preview.png" alt="logo"/>
			</div>
			<div><Link to="/about">
		<div class="absolute top-0 right-0 h-32 w-31">
			<a href="#_" class="relative inline-block text-lg group">
			<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
			<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
			<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
			<span class="relative">About</span>
			</span>
			<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
			</a>
		</div> 
</Link></div>
			<div className="px-40 py-20">
				<h1 className="text-blue-800 text-4xl font-bold">
				Car Detector with %93 Accuracy</h1>
				<h2 className="text-white text-3xl font-light">
				<p>Don't Ask  Car Enthusiasts, Ask Us!</p>
				<p>we have build an automative api with %93 accuracy</p>
				<p>that will recognize the year, model and color</p>
				<p>of most cars since 1928.</p></h2>
			</div>
		</div>
	<br></br>
	<div>
	<input type="file" class="text-sm text-grey-500
            file:mr-5 file:py-3 file:px-10
            file:rounded-full file:border-0
            file:text-md file:font-semibold  file:text-white
            file:bg-gradient-to-r file:from-blue-600 file:to-amber-600
            hover:file:from-green-600 hover:file:to-red-600" onChange={this.uploadPicture}/>
		{this.checkImage()}
		{this.checkResponse(this.state.result)}
		</div>
	</div>
);
};
}
export default Home;
