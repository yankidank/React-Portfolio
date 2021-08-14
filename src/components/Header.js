import React from "react";
import "../styles/Header.css";

function Header(props) {
	const { title, description } = props;
	const hostname = window.location.origin;
	return (
		<header id="page-header">
			<div data-tilt-full-page-listening className="header">
				<h1 className="page-title"><a href={hostname}>{title}</a></h1>
				<h3 className="page-description rainbow">{description}</h3>
			</div>
		</header>
	)
}

export default Header;
