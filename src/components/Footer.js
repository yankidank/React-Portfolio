import React from "react";
import { InView } from 'react-intersection-observer';
import "../styles/Footer.css";

function Footer(props) {
	const { email, github, linkedin } = props;
	const email_link = 'mailto:'+email;
	const github_link = 'https://github.com/'+github;
	const linkedin_link = 'https://www.linkedin.com/in/'+linkedin;


	function intersectionView(inView) {
		const imageView = document.getElementById('footer_container');
		if (inView && imageView.classList[1] !== 'animate' && imageView.classList[1] !== 'inView'){
			imageView.classList.add('animate');
		} else if (imageView.classList[1] === 'animate'){
			imageView.classList.remove('animate');
			imageView.classList.add('inView');
		} else if (!inView) {
			imageView.classList.remove('animate');
		} else if (inView) {
			imageView.classList.add('inView');
		}
	}
	
	return (      
		<footer>
			<InView as="div" onChange={(inView) => intersectionView(inView) } >		
				<div className="container" id="footer_container">
					<div className="row">
						<div className="column">
							<h2>Reach Out</h2>
						</div>
					</div>
					<div className="row">
						<div className="footer-contact">
							<div className="footer-inner-contact">
								<div className="footer-contact-icons">
									<a href={email_link} title="Send me an Email 📧" rel="noopener noreferrer"><i className="icon icon_email"></i></a>
									<a href={github_link} title="Eric's GitHub Profile" target="_blank" rel="noopener noreferrer"><i className="icon icon_github"></i></a>
									<a href={linkedin_link} title="Eric's LinkedIn Profile" target="_blank" rel="noopener noreferrer"><i className="icon icon_linkedin"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</InView>
		</footer>
	)
}

export default Footer;