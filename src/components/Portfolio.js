import React, {useState, useEffect} from "react";
import { useEasybase } from 'easybase-react';
import { InView } from 'react-intersection-observer';
import "../styles/Portfolio.css";

function Portfolio() {

	const [easybaseData, setEasybaseData] = useState([]);
	const [easybaseImg, setEasybaseImg] = useState([]);
	const { db } = useEasybase();

	useEffect(() => {
	  	mounted();
		async function mounted() {
			const ebData = await db("HEIKKINEN-CONTENT").return().all();
			setEasybaseData(ebData);
			const ebImg = await db("HEIKKINEN-IMAGES").return().where({ displayorder: 1 }).limit(25).orderBy({ by: "post", sort: "asc" }).all();
			setEasybaseImg(ebImg);
		}
	}, [db]);

	function intersectionView(inView, post) {
		if (inView){
			const imageView = document.getElementById( post );
			if (imageView !== null){
				imageView.classList.add('animate');
			}
		}
	}

	return (
		<div>
			{easybaseData.map(item => (
				<InView as="div" onChange={(inView) => intersectionView(inView, item.post) } key={"observer_"+item._key}>	
					<div className="row portfolio-row">
						<div className="column column-50">
							<div className="projects_wrapper_left" >
								<a href={'./project/'+item.post}>
									{easybaseImg.filter(e => e.post === item.post).map(img => (
										<picture key={item._key} id={item.post}>
											{/* <source media="(min-width:650px)" srcset={img.image} /> */}
											<img src={img.image} alt={item.title} title={item.title} />
										</picture>
									))}	
								</a>
							</div>
						</div>
						<div className="column column-50">
							<div className="projects_wrapper_right">
								<h3 className="project_title"><a href={'./project/'+item.post}>{item.title}</a></h3>
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
