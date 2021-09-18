import React, { useEffect, useState } from "react";
import { useEasybase } from 'easybase-react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay, Pagination} from 'swiper/core';  
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "../styles/Project.css";

SwiperCore.use([Autoplay, Pagination]);

function Project(props) {

	const [easybaseData, setEasybaseData] = useState([]);
	const [easybaseImg, setEasybaseImg] = useState([]);
	const { db } = useEasybase();
	const id = parseInt(props.match.params.id);
	var images = [];

	useEffect(() => {
	  	mounted();
		async function mounted() {
			const ebData = await db("HEIKKINEN-CONTENT").return().where({ post: id }).one();
			setEasybaseData(ebData);
			const ebImg = await db("HEIKKINEN-IMAGES").return().where({ post: id}).orderBy({ by: "displayorder", sort: "asc" }).all();
			setEasybaseImg(ebImg);
		}
	}, [db, id]);

	easybaseImg.forEach(item => {
		images.push(
			<SwiperSlide key={item._key}>
				<picture>
					{/* <source media="(min-width:650px)" srcset={item.image} /> */}
					<img alt={easybaseData.title} title={easybaseData.title} src={item.image} />
				</picture>
			</SwiperSlide>
		);
	});
	
	function slideControl(){
		if (images.length > 1){
			return true
		} else {
			return false
		}
	}
	return (
		<>
			{[easybaseData].map(item => (
				<div className="row project-row" key={item._key+Math.random()}>
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
		</>
	);
}

export default Project;
