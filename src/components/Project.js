import React from "react";
import "../styles/Project.css";

function Project(props) {
	const id = parseInt(props.match.params.id);
	function checkId(project) {
		return project.id === id;
	}
	const project = props.cards.filter(checkId);
	var images = [];

	project.map(function(item){
		for (var i = 0; i < item.screens.length; i++) {
			var imgKey = 'img-'+i;
			images.push(<div key={imgKey} className="swiper-slide"><img alt={item.title} title={item.title} src={item.screens[i]} /></div>);
		}
		return ''
	})
	return (
		<div>
			<br />
			{project.map(item => (
				<div className="row project-row" key={item.id}>
					<div className="column">
						<div className="swiper-container">
							<div className="swiper-button-prev"></div>
							<div className="swiper-button-next"></div>
							<div className="projects_wrapper_left swiper-wrapper" id="project_left">
								{images}
							</div>
						</div>
						<div className="projects_wrapper_right" id="project_right">
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
