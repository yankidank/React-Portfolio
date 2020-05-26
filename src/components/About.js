import React from "react";
import "../styles/About.css";

function About(props) {
	const { title, description, personal } = props;
	return (
		<div className="column column-75 aboutme">	
			<h2>{title}</h2>
			<p>{description}</p>
			<p>{personal}</p>
		</div>
	)
}

export default About;
