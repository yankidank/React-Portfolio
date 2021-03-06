import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Footer from './components/Footer';

const email = 'ericheikkinen@gmail.com';
const github = 'yankidank';
const linkedin = 'finnished';
const portfolio = [
  {
    id: 1,
    title: "Pligg CMS",
    tags: "MySQL · PHP · WordPress · vBulletin · JavaScript · jQuery · CSS",
    description: "I founded and developed the open source Pligg Content Management System, which lets anyone create a Reddit-like website using the LAMP stack. Pligg includes a template engine and module system for extending features. I've divested myself from the Pligg.com domain, which once featured an ecommerce shop for purchasing digital items, a support forum, blog, and software demo.",
    url: "https://github.com/yankidank/pligg-cms",
    github: "https://github.com/yankidank/pligg-cms",
    preview: "",
    screens: [
      "/assets/img/screens/pligg-home.jpg",
      "/assets/img/screens/pligg2.jpg",
      "/assets/img/screens/pligg4.jpg",
      "/assets/img/screens/pligg-demo.jpg"
    ]
  },
  {
    id: 13,
    title: "Codify Job Application Management",
    description: "Stay organized throughout your job hunt. Create an account on the Codify app to begin tracking job posts, applications, contacts, interviews, and offers.",
    tags: "MongoDB · Express · React · Node.js · JavaScript · CSS",
    url: "https://codify.works/",
    github: "https://github.com/yankidank/Codify",
    preview: "https://codify.works/",
    screens: [
      "/assets/img/screens/codify-home.jpg",
      "/assets/img/screens/codify-job-detail.jpg",
      "/assets/img/screens/codify-dashboard.jpg",
      "/assets/img/screens/codify-login.jpg",
    ]
  },
  {
    id: 2,
    title: "Covid-19 Tracker",
    description: "The Covid-19 Tracker project uses APIs and other data sources to visualize the spread and impact of Covid-19 across the globe using a heatmap. Users can subscribe to a newsletter containing the latest information about the spread of the virus.",
    tags: "MySQL · Node.js · Express · JavaScript · jQuery · API",
    url: "http://plague.site",
    github: "https://github.com/yankidank/covid-19-tracker",
    preview: "http://plague.site",
    screens: [
      "/assets/img/screens/covid-19-tracker.jpg",
      "/assets/img/screens/covid-19-tracker4.jpg",
      "/assets/img/screens/covid-19-tracker3.jpg",
      "/assets/img/screens/covid-19-tracker2.jpg"
    ]
  },
  {
    id: 3,
    title: "Johnson & Johnson Attorneys",
    tags: "MySQL · PHP · JavaScript · CSS · WordPress",
    description: "A legal firm's website built upon WordPress.",
    url: "https://johnsonandjohnsonohio.com/",
    github: "",
    preview: "https://johnsonandjohnsonohio.com/",
    screens: [
      "/assets/img/screens/johnson.jpg",
      "/assets/img/screens/johnson-blog.jpg",
      "/assets/img/screens/johnson-attorneys.jpg",
      "/assets/img/screens/johnson-contact.jpg",
    ]
  },
  {
    id: 4,
    title: "Hourly Agenda Planner",
    tags: "JavaScript · jQuery · CSS",
    description: "Track agenda items on an hourly day planner. Data is stored locally and a weather API call displays the location and temperature. The theme switches between light and dark modes based on the time of day.",
    url: "https://yankidank.github.io/daily-agenda/",
    github: "https://github.com/yankidank/daily-agenda",
    preview: "https://yankidank.github.io/daily-agenda/",
    screens: [
      "/assets/img/screens/daily-agenda.jpg",
      "/assets/img/screens/daily-agenda-golden.jpg"
    ]
  },
  {
    id: 5,
    title: "Track TV",
    tags: "JavaScript · jQuery · API · CSS",
    description: "Discover and track television shows to view the upcoming week's schedule. This project utilizes the TVmaze, OMdB, and Fanart.tv APIs to gather show information, ratings, and images.",
    url: "https://yankidank.github.io/TV-Tracker/index.html",
    github: "https://github.com/yankidank/TV-Tracker",
    preview: "https://yankidank.github.io/TV-Tracker/index.html",
    screens: [
      "/assets/img/screens/track-tv.jpg",
      "/assets/img/screens/track-tv-search.jpg"
    ]
  },
  {
    id: 6,
    title: "Workout Journal",
    tags: "JavaScript · jQuery · Node.js · Express · MongoDB",
    description: "Create a workout plan, add exercises, and manage routines.",
    url: "https://obscure-garden-30566.herokuapp.com/",
    github: "JavaScript · jQuery · Node.js · Express · MongoDB",
    preview: "https://obscure-garden-30566.herokuapp.com/",
    screens: [
      "/assets/img/screens/workout.png"
    ]
  },
  {
    id: 7,
    title: "Weather Forecast",
    tags: "JavaScript · jQuery · API · CSS",
    description: "View the weather forecast for different locations using the OpenWeather Map API.",
    url: "https://yankidank.github.io/weather/  ",
    github: "https://github.com/yankidank/weather",
    preview: "https://yankidank.github.io/weather/",
    screens: [
      "/assets/img/screens/weather.jpg"
    ]
  },
  {
    id: 8,
    title: "Password Generator",
    tags: "JavaScript · CSS",
    description: "Quickly generate and copy a secure password with adjustable length and character types.",
    url: "https://yankidank.github.io/PasswordGenerator/",
    github: "https://github.com/yankidank/PasswordGenerator",
    preview: "https://yankidank.github.io/PasswordGenerator/",
    screens: [
      "/assets/img/screens//password-generator.png"
    ]
  },
  {
    id: 9,
    title: "Gas and Oil Law",
    tags: "PHP · MySQL · JavaScript · CSS · WordPress · SEO",
    description: "A web resource for natural gas and oil landowners, investors and producers. Articles are published using WordPress.",
    url: "http://gasandoillaw.com/",
    github: "",
    preview: "http://gasandoillaw.com/",
    screens: [
      "/assets/img/screens/gasandoil.jpg",
      "/assets/img/screens/gasandoil-blog.jpg"
    ]
  },
  {
    id: 10,
    title: "Attorn.me",
    tags: "HTML · CSS · JavaScript",
    description: "Contact an attorney and receive a quote using a web form.",
    url: "https://attorn.me/",
    github: "",
    preview: "https://attorn.me/",
    screens: [
      "/assets/img/screens/attornme.jpg"
    ]
  },
  {
    id: 11,
    title: "Avalanche Energy",
    tags: "HTML · CSS",
    description: "An Ohio based oil and gas leasing company that negotiates leasing contracts between landowners and drilling companies.",
    url: "http://avalancheenergy.com/",
    github: "",
    preview: "http://avalancheenergy.com/",
    screens: [
      "/assets/img/screens/avalanche.jpg"
    ]
  },
  {
    id: 12,
    title: "eGallery",
    tags: "PHP · JavaScript · jQuery",
    description: "PHP script to generate image galleries using images stored in the same directory. Add new images using a password protected upload page.",
    url: "https://github.com/yankidank/egallery",
    github: "https://github.com/yankidank/egallery",
    preview: "",
    screens: [
      "/assets/img/screens/egallery.jpg"
    ]
  }
];

class App extends Component {

  componentDidMount(){
    const hostname = window.location.origin;
    const vanilla = document.createElement("script");
    vanilla.src = hostname+"/assets/js/vanilla-tilt.min.js";
    vanilla.async = true;
    document.body.appendChild(vanilla);
    const script = document.createElement("script");
    script.src = hostname+"/assets/js/index.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render(){
    return (
      <Router>
        <div className="App">
            <Header title="Eric Heikkinen" description="Los Angeles • California" />
            <main>
              <div className="container">
                <div className="row">
                  <div className="column column-5"> </div>
                  <div className="column column-90 wrapper main_content content_wrapper">	
                    <div className="container">
                      <Switch>
                        <Route path="/about">
                          <div className="row">
                            <About 
                              title="About Me" 
                              description="I'm a Full Stack developer specializing in Front-End UI/UX design. I hold a Bachelor of Fine Arts from SCAD and a certificate in Full Stack Web Development through UCLA Extension. Technically proficient with both the LAMP (Linux, Apache, MySQL, PHP) and MERN stacks (MongoDB, Express, React, Node). Founded and developed the popular open source project Pligg CMS." 
                              personal="My passions outside of web development include music, photography, travel, finance, and politics." 
                            />
                            <Contact 
                              title="Contact" 
                              resume="Heikkinen_Resume.pdf" 
                              email={email} 
                              github={github} 
                              linkedin={linkedin} 
                            />
                          </div>
                          <Education 
                            title="Education" 
                            school1="UCLA Extension Coding Bootcamp" 
                            school1_description="Full Stack Web Development" 
                            school2="Savannah College of Art and Design" 
                            school2_description="B.F.A. Film and Television Production" 
                          />
                          <Skills />
                        </Route>
                        <Route path="/portfolio">
                          <div className="row">
                            <div className="column">
                              <h2>Projects</h2>
                            </div>
                          </div>
                          <Portfolio cards={portfolio} />
                        </Route>
                        <Route path="/project/:id" render={(props) => <Project {...props} cards={portfolio} />}></Route>
                        <Route path="/">
                          <div className="row">
                            <About 
                              title="About Me" 
                              description="I'm a Full Stack developer specializing in Front-End UI/UX design. I hold a Bachelor of Fine Arts from SCAD and a certificate in Full Stack Web Development through UCLA Extension. Technically proficient with both the LAMP (Linux, Apache, MySQL, PHP) and MERN stacks (MongoDB, Express, React, Node). Founded and developed the popular open source project Pligg CMS." 
                              personal="My passions outside of web development include music, photography, travel, finance, and politics." 
                            />
                            <Contact 
                              title="Contact" 
                              resume="Heikkinen_Resume.pdf" 
                              email={email} 
                              github={github} 
                              linkedin={linkedin} 
                            />
                          </div>
                          <Education title="Education" school1="UCLA Extension Coding Bootcamp" school1_description="Full Stack Web Development" school2="Savannah College of Art and Design" school2_description="B.F.A. Film and Television Production" />
                          <Skills />                         
                          <div className="row">
                            <div className="column">
                              <h2>Projects</h2>
                            </div>
                          </div>
                          <Portfolio cards={portfolio} />
                        </Route>
                      </Switch>                      
                    </div>
                  </div>
                  <div className="column column-5"> </div>
                </div>
              </div>
            </main>
            <div className="page-divider"></div>
            <div id="thenet" title="Ctrl+Shift"></div>
            <Footer email={email} github={github} linkedin={linkedin} />
        </div>
      </Router>
    );
  }
}

export default App;
