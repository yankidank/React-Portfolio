import React from "react";
import "../styles/Contact.css";

function Contact(props) {
	const { title, email, github, linkedin, resume } = props;
	const email_link = 'mailto:'+email;
	const github_link = 'https://github.com/'+github;
	const linkedin_link = 'https://www.linkedin.com/in/'+linkedin;
	const resume_link = ''+resume;
	return (
		<div className="column column-25 contact">	
			<h2>{title}</h2> 
			<div className="container">
			<div className="row">
				<div className="column">
				<i className="icon icon_email"></i>
				<a href={email_link} title="Send me an Email 📧">Email</a>
				</div>
			</div>
			<div className="row">
				<div className="column">
				<i className="icon icon_github"></i>
				<a href={github_link} title="GitHub Profile" target="_blank" rel="noopener noreferrer">GitHub</a>
				</div>
			</div>
			<div className="row">
				<div className="column">
				<i className="icon icon_noblock_linkedin"></i>
				<a href={linkedin_link} title="LinkedIn Profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
				</div>
			</div>
			<div className="row">
				<div className="column">
				<i className="icon icon_resume"></i>
				<a href={resume_link} title="Résumé" target="_blank" rel="noopener noreferrer">Resume</a>
				</div>
			</div>
			</div>
		</div>
	)
}

export default Contact;
