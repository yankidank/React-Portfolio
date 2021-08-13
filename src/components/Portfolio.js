import React from "react";
import { InView } from 'react-intersection-observer';
import "../styles/Portfolio.css";

function Portfolio(props) {
	const portfolio = props.cards;

	function intersectionView(inView, id) {
		const imageView = document.getElementById( id );
		if (inView && imageView.classList[0] !== 'animate' && imageView.classList[0] !== 'inView'){
			imageView.classList.add('animate');
		} else if (imageView.classList[0] === 'animate'){
			imageView.classList.remove('animate');
			imageView.classList.add('inView');
		} else if (!inView) {
			imageView.classList.remove('animate');
		}
	}

	return (
		<div>
			{portfolio.map(item => (
				<InView as="div" onChange={(inView) => intersectionView(inView, item.id) } key={item.id}>		
					<div className="row portfolio-row">
						<div className="column column-50">
							<div className="projects_wrapper_left" >
								<a href={'./project/'+item.id}>
									<img 
										id={item.id}
										alt={item.title} 
										title={item.title} 
										src={item.screens[0]} 
									/>
								</a>
							</div>
						</div>
						<div className="column column-50">
							<div className="projects_wrapper_right">
								<h3 className="project_title"><a href={'./project/'+item.id}>{item.title}</a></h3>
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
				</InView>
			))}
	  	</div>
	);
}

export default Portfolio;
