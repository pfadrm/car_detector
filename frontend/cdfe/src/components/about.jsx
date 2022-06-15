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
		<Link to="/">
		<button type="button">
          hichem
     </button>
		</Link>
		</li>
		<li>
		<Link to="/about">
		<button type="button">
          About
     </button>
		</Link>
		</li>
	</ul>
    </div>
);
};
export default About;