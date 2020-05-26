import React from "react";

function Header(props) {
	const { title, description } = props;
	return (
		<header data-tilt-full-page-listening id="page-header" >
			<div className="header">
				<h1 className="page-title">{title}</h1>
				<h3 className="page-description">{description}</h3>
			</div>
		</header>
	)
}

export default Header;
