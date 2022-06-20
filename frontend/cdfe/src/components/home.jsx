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
			<img src={this.state.picturePreview} alt=""/>
		   <h4>Brand: {data.brand}</h4>
		   <p>Color: {data.color}</p>
		   <p>Model: {data.model}</p>
		   <p>Year: {data.year}</p>
		</div>
	  );
   }
}
render(){
return (
	<div>
		<div className="bg-gradient-to-tr from-purple-400 to-green-700 h-96 w-full relative">
			<img src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="car img"
				className="w-full h-full object-cover absolute mix-blend-soft-light"/>
			<div><Link to="/about">
			<button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded absolute top-0 right-0 h-10 w-30">
  				More Info
			</button></Link></div>
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
		<input type="file" name="image" onChange={this.uploadPicture}/>
		{this.checkImage()}
		{this.checkResponse(this.state.result)}
		</div>
	</div>
);
};
}
export default Home;
