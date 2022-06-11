import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
return (
	<div>
	<h1>Car Detector</h1>
	<ul>
		<div><Link to="/">
			<button type="button">
          		Home
     		</button></Link></div>
		<Link to="/about">
			<button type="button">
          		About
     		</button></Link>
	</ul>
	</div>
);
};

export default Home;
