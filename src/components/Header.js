import React from "react";
import "../styles/Header.css";

function Header(props) {
	const { title, description } = props;
	return (
		<header id="page-header">
			<div data-tilt-full-page-listening className="header">
				<h1 className="page-title">{title}</h1>
				<h3 className="page-description">{description}</h3>
			</div>
		</header>
	)
}

export default Header;
