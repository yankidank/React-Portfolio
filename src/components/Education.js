import React from "react";

function Education(props) {
	const { title, school1, school1_description, school2, school2_description } = props;
	return (
		<div className="row">
			<div className="column">
				<div className="content_full education">
					<h2>{title}</h2>
					<div className="row">
					<div className="column column-50">
						<p className="eduSchool">{school1}</p>
						<p className="eduDesc">{school1_description}</p>
					</div>
					<div className="column column-50">
						<p className="eduSchool">{school2}</p>
						<p className="eduDesc">{school2_description}</p>
					</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Education;
