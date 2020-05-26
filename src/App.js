import React, {Component} from 'react';
import './App.css';


const portfolio = [
  {
    id: 1,
    title: "Pligg CMS",
    tags: "MySQL · PHP · WordPress · vBulletin · JavaScript · jQuery · CSS",
    description: "I founded and developed the open source Pligg Content Management System, which lets anyone create a Reddit-like website using the LAMP stack. Pligg includes a template engine and module system for extending features. I've divested myself from the Pligg.com domain, which once featured an ecommerce shop for purchasing digital items, a support forum, blog, and software demo.",
    url: "https://github.com/yankidank/pligg-cms",
    github: "https://github.com/yankidank/pligg-cms",
    preview: "",
    image: "/assets/img/screens/pligg-home.jpg"
  },
  {
    id: 2,
    title: "Covid-19 Tracker",
    description: "The Covid-19 Tracker project uses APIs and other data sources to visualize the spread and impact of Covid-19 across the globe using a heatmap. Users can subscribe to a newsletter containing the latest information about the spread of the virus.",
    tags: "MySQL · Node.js · Express · JavaScript · jQuery · API",
    url: "http://plague.site",
    github: "https://github.com/yankidank/covid-19-tracker",
    preview: "http://plague.site",
    image: "/assets/img/screens/covid-19-tracker.jpg"
  },
  {
    id: 3,
    title: "Johnson & Johnson Attorneys",
    tags: "MySQL · PHP · JavaScript · CSS · WordPress",
    description: "A legal firm's website built upon WordPress.",
    url: "https://johnsonandjohnsonohio.com/",
    github: "",
    preview: "https://johnsonandjohnsonohio.com/",
    image: "/assets/img/screens/johnson.jpg"
  },
  {
    id: 4,
    title: "Hourly Agenda Planner",
    tags: "JavaScript · jQuery · CSS",
    description: "Track agenda items on an hourly day planner. Data is stored locally and a weather API call displays the location and temperature. The theme switches between light and dark modes based on the time of day.",
    url: "https://yankidank.github.io/daily-agenda/",
    github: "https://github.com/yankidank/daily-agenda",
    preview: "https://yankidank.github.io/daily-agenda/",
    image: "/assets/img/screens/daily-agenda.jpg"
  },
  {
    id: 5,
    title: "Track TV",
    tags: "JavaScript · jQuery · API · CSS",
    description: "Discover and track television shows to view the upcoming week's schedule. This project utilizes the TVmaze, OMdB, and Fanart.tv APIs to gather show information, ratings, and images.",
    url: "https://yankidank.github.io/TV-Tracker/index.html",
    github: "https://github.com/yankidank/TV-Tracker",
    preview: "https://yankidank.github.io/TV-Tracker/index.html",
    image: "/assets/img/screens/track-tv.jpg"
  },
  {
    id: 6,
    title: "Workout Journal",
    tags: "JavaScript · jQuery · Node.js · Express · MongoDB",
    description: "Create a workout plan, add exercises, and manage routines.",
    url: "https://obscure-garden-30566.herokuapp.com/",
    github: "JavaScript · jQuery · Node.js · Express · MongoDB",
    preview: "https://obscure-garden-30566.herokuapp.com/",
    image: "/assets/img/screens/workout.png"
  },
  {
    id: 7,
    title: "Weather Forecast",
    tags: "JavaScript · jQuery · API · CSS",
    description: "View the weather forecast for different locations using the OpenWeather Map API.",
    url: "https://yankidank.github.io/weather/  ",
    github: "https://github.com/yankidank/weather",
    preview: "https://yankidank.github.io/weather/",
    image: "/assets/img/screens/weather.jpg"
  },
  {
    id: 8,
    title: "Password Generator",
    tags: "JavaScript · CSS",
    description: "Quickly generate and copy a secure password with adjustable length and character types.",
    url: "https://yankidank.github.io/PasswordGenerator/",
    github: "https://github.com/yankidank/PasswordGenerator",
    preview: "https://yankidank.github.io/PasswordGenerator/",
    image: "/assets/img/screens//password-generator.png"
  },
  {
    id: 9,
    title: "Gas and Oil Law",
    tags: "PHP · MySQL · JavaScript · CSS · WordPress · SEO",
    description: "A web resource for natural gas and oil landowners, investors and producers. Articles are published using WordPress.",
    url: "http://gasandoillaw.com/",
    github: "",
    preview: "http://gasandoillaw.com/",
    image: "/assets/img/screens/gasandoil.jpg"
  },
  {
    id: 10,
    title: "Attorn.me",
    tags: "HTML · CSS · JavaScript",
    description: "Contact an attorney and receive a quote using a web form.",
    url: "https://attorn.me/",
    github: "",
    preview: "https://attorn.me/",
    image: "/assets/img/screens/attornme.jpg"
  },
  {
    id: 11,
    title: "Avalanche Energy",
    tags: "HTML · CSS",
    description: "An Ohio based oil and gas leasing company that negotiates leasing contracts between landowners and drilling companies.",
    url: "http://avalancheenergy.com/",
    github: "",
    preview: "http://avalancheenergy.com/",
    image: "/assets/img/screens/avalanche.jpg"
  },
  {
    id: 12,
    title: "eGallery",
    tags: "PHP · JavaScript · jQuery",
    description: "PHP script to generate image galleries using images stored in the same directory. Add new images using a password protected upload page.",
    url: "https://github.com/yankidank/egallery",
    github: "https://github.com/yankidank/egallery",
    preview: "",
    image: "/assets/img/screens/egallery.jpg"
  }
];

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
                    <Projects cards={portfolio} />
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
      <div>
        {portfolio.map(item => (
          <div className="row project-row">
            <div className="column column-50" key={item.id}>
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
                  <a href={item.github} className="button button-blue" target="_blank" rel="noopener noreferrer">
                    <i className="icon icon_github"></i>
                    GitHub
                  </a>			
                </div>
              </div>
            </div>
          </div>
        ))}
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
