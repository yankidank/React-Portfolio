import React from "react";
import "../styles/Project.css";

function Project(props) {
	const portfolio = props.cards;
	return (
		<div>
			{portfolio.map(item => (
			<div className="row project-row" key={item.id}>
				<div className="column column-50">
					<div className="projects_wrapper_left" >
						<a href={item.url} target="_blank" rel="noopener noreferrer">
							<img alt={item.title} title={item.title} src={item.image} />
						</a>
					</div>
				</div>
				<div className="column column-50">
					<div className="projects_wrapper_right">
						<h3 className="project_title">{item.title}</h3>
						<p className="project_tags"><em>{item.tags}</em></p>
						<p className="project_description">{item.description}</p>
						<div className="projects_buttons_wrapper">
							{item.github ? <a href={item.github} className="button button-blue" target="_blank" rel="noopener noreferrer"><i className="icon icon_github"></i>GitHub</a> : ''}
							{item.github && item.preview ? ' ' : ''}
							{item.preview ? <a href={item.preview} className="button button-dark" target="_blank" rel="noopener noreferrer"><i className="icon icon_preview"></i>Preview</a> : ''}
						</div>
					</div>
				</div>
			</div>
			))}
		</div>
	);
}

export default Project;
