import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    toggle: true,
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render(){
    return (
      <div className="App">
          <Header title="Eric Heikkinen" description="Los Angeles • California" />
          <main>
            <div className="container">
              <div className="row">
                <div className="column column-5"> </div>
                <div className="column column-90 wrapper main_content content_wrapper">	
                  <div className="container">
                    <div className="row">
                      <About title="About Me" description="I'm a full stack developer with knowledge of front end design, web programming languages, and database technologies. Proficient with both the LAMP (Linux, Apache, MySQL, PHP) and MERN stacks (MongoDB, Express.js, React.js, Node.js)." personal="My passions outside of web development include music, films, photography, and politics." />
                      <Contact title="Contact" email="ericheikkinen@gmail.com" github="yankidank" linkedin="finnished" resume="Heikkinen_Resume.pdf" />
                    </div>
                    <Education title="Education" school1="UCLA Extension Coding Bootcamp" school1_description="Full Stack Web Development" school2="Savannah College of Art and Design" school2_description="B.F.A. Film and Television Production" />
                    <div className="row">
                      <div className="column">
                        <h2>Projects</h2>
                      </div>
                    </div>
                    <Projects />
                  </div>
                </div>
                <div className="column column-5"> </div>
              </div>
            </div>
          </main>
          <div className="page-divider"></div>
          <div id="thenet" title="Ctrl+Shift">π</div>
          <Footer email="eric@ericheikkinen.com" github="yankidank" linkedin="finnished" />
          {/* {this.state.toggle && <p>Hello</p> }
          <button onClick={this.toggle}>Toggle</button> */}
      </div>
    );
  }
}

class Header extends Component {
  render(){
    const { title, description } = this.props;
    return (
      <header data-tilt-full-page-listening id="page-header" >
       	<div className="header">
          <h1 className="page-title">{title}</h1>
          <h3 className="page-description">{description}</h3>
        </div>
      </header>
    )
  }
}
class About extends Component {
  render(){
    const { title, description, personal } = this.props;
    return (
      <div className="column column-75 aboutme">	
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{personal}</p>
      </div>
    )
  }
}
class Contact extends Component {
  render(){
    const { title, email, github, linkedin, resume } = this.props;
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
}

class Education extends Component {
  render(){
    const { title, school1, school1_description, school2, school2_description } = this.props;
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
}

class Projects extends Component {
  render(){
    return (
      <div className="row project-row">
        <div className="column column-50">
          <div className="projects_wrapper_left" >
            <a href="https://github.com/yankidank/pligg-cms" target="_blank" rel="noopener noreferrer">
              <img alt="Pligg CMS" title="Pligg Content Management System (Open Source)" src="./assets/img/screens/pligg-home.jpg" />
            </a>
          </div>
        </div>
        <div className="column column-50">
          <div className="projects_wrapper_right">
            <h3 className="project_title">Pligg CMS</h3>
            <p className="project_tags"><em>MySQL · PHP · WordPress · vBulletin · JavaScript · jQuery · CSS</em></p>
            <p className="project_description">
              I founded and developed the open source Pligg Content Management System, which lets anyone create a Reddit-like website using the LAMP stack. 
              Pligg includes a template engine and module system for extending features.
              I've divested myself from the Pligg.com domain, which once featured an ecommerce shop for purchasing digital items, a support forum, blog, and software demo.
            </p>
            <div className="projects_buttons_wrapper">
              <a href="https://github.com/yankidank/pligg-cms" className="button button-blue" target="_blank" rel="noopener noreferrer">
                <i className="icon icon_github"></i>
                GitHub
              </a>			
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Footer extends Component {
  render(){
    const { email, github, linkedin } = this.props;
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
}
export default App;
