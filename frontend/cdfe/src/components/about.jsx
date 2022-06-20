import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import FormData from 'form-data'

class About extends Component{
	constructor(props) {
        super(props);
        this.state = {
			result: {},
            selectedFile: false,
			info: {},
			selectedInfo: false
        }
    }
	uploadPicture = (e) => {
		this.setState({
			picturePreview : URL.createObjectURL(e.target.files[0]),
			pictureAsFile : e.target.files[0],
		})
	};
	 setImageAction = () => {
	const Data = new FormData()
	Data.append("file", this.state.pictureAsFile);
	axios.post("http://127.0.0.1:5000/predict", Data)
		.then((response) => {
			console.log(response.data)
			this.setState({
				result: response.data,
				selectedFile: true
			})
		}).catch((error) => {
		
		});
	axios.get("https://en.wikipedia.org/w/rest.php/v1/search/page?q=BMW&limit=1")
		.then((resp) => {
			console.log(resp.data.pages[0])
			this.setState({
				info: resp.data.pages[0],
				selectedInfo: true
			})
	 })
};
checkResponse(data){
	if (this.state.selectedFile === true){
	  return(
		<div>
		   <h4>Brand: {data.brand}</h4>
		   <p>Color: {data.color}</p>
		   <p>Model: {data.model}</p>
		   <p>Year: {data.year}</p>
		</div>
	  );
   }
}
checkInfo(data){
	if (this.state.selectedInfo === true){
		return(
		  <div>
			 <p>{data.excerpt}</p>
		  </div>
		);
	 }
	}
render(){
return (
    <div>
    <h1>
        About Page
    </h1>
    <ul>
		<li>
		<Link to="/">
		<button type="button">
          Home
     </button>
		</Link>
		</li>
	</ul>
	<br></br>
		<div>
		<input type="file" name="image" onChange={this.uploadPicture}/>
		<button onClick={this.setImageAction}> 
                  Upload! 
        </button>
		{this.checkResponse(this.state.result)}
		{this.checkInfo(this.state.info)}
		</div>
    </div>
);
};
}
export default About;