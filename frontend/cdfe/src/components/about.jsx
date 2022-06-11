import React from "react";
import { Link } from "react-router-dom";

const About = () => {
return (
    <div>
    <h1>
        About Page
    </h1>
    <ul>
		<li>
		<Link to="/">Home</Link>
		</li>
		<li>
		<Link to="/about">About</Link>
		</li>
	</ul>
    </div>
);
};
export default About;