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
	axios.post("http://164.92.212.85/predict", Data)
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
		<div className="text-center">
			<svg role="status" class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
			<img class="object-contain h-40 w-40" src={this.state.picturePreview} alt=""/>
		   <h4>Brand: {data.result.brand}</h4>
		   <p>Color: {data.result.color}</p>
		   <p>Model: {data.result.model}</p>
		   <p>Year: {data.result.year}</p>
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
