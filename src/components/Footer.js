import React from "react";
import "../styles/Footer.css";

function Footer(props) {
	const { email, github, linkedin } = props;
	const email_link = 'mailto:'+email;
	const github_link = 'https://github.com/'+github;
	const linkedin_link = 'https://www.linkedin.com/in/'+linkedin;
	
	return (      
		<footer>
			<div className="container">
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
		</footer>
	)
}

export default Footer;