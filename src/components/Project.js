import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay, Pagination} from 'swiper/core';  
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "../styles/Project.css";
import portfolio from '../ProjectData';

SwiperCore.use([Autoplay, Pagination]);

function Project(props) {
	const id = parseInt(props.match.params.id);
	function checkId(project) {
		return project.id === id;
	}
	const project = portfolio.filter(checkId);
	var images = [];

	project.map(function(item){
		for (var i = 0; i < item.screens.length; i++) {
			var imgKey = 'img-'+i;
			images.push(<SwiperSlide key={imgKey}><img alt={item.title} title={item.title} src={item.screens[i]} /></SwiperSlide>);
		}
		return '';
	})
	function slideControl(){
		if (images.length > 1){
			// 2+ images
			return true
		} else {
			// 1 image
			return false
		}
	}
	return (
		<div>
			{project.map(item => (
				<div className="row project-row" key={item.id}>
					<div className="column">
						<div className="projects_wrapper_left" id="project_left">
							{slideControl() ? <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{"clickable": true}} autoplay={{ "delay": 5000, "disableOnInteraction": false }} className="swiper-wrapper">{images}</Swiper> : <div>{images}</div> }
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
