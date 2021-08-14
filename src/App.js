import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VanillaTilt from 'vanilla-tilt';

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Footer from './components/Footer';

import ScreenPliggHome from './img/screens/pligg-home.jpg';
import ScreenPligg2 from './img/screens/pligg2.jpg';
import ScreenPligg4 from './img/screens/pligg4.jpg';
import ScreenPliggDemo from './img/screens/pligg-demo.jpg';
import ScreenCodifyHome from './img/screens/codify-home.jpg';
import ScreenCodifyJobDetail from './img/screens/codify-job-detail.jpg';
import ScreenCodifyDashboard from './img/screens/codify-dashboard.jpg';
import ScreenCodifyLogin from './img/screens/codify-login.jpg';
import ScreenCovid1 from './img/screens/covid-19-tracker.jpg';
import ScreenCovid2 from './img/screens/covid-19-tracker2.jpg';
import ScreenCovid3 from './img/screens/covid-19-tracker3.jpg';
import ScreenCovid4 from './img/screens/covid-19-tracker4.jpg';
import ScreenJohnson from './img/screens/johnson.jpg';
import ScreenJohnsonBlog from './img/screens/johnson-blog.jpg';
import ScreenJohnsonAttorneys from './img/screens/johnson-attorneys.jpg';
import ScreenJohnsonContact from './img/screens/johnson-contact.jpg';
import ScreenAgenda from './img/screens/daily-agenda.jpg';
import ScreenAgendaGolden from './img/screens/daily-agenda-golden.jpg';
import ScreenTrackTv from './img/screens/track-tv.jpg';
import ScreenTrackTvSearch from './img/screens/track-tv-search.jpg';
import ScreenWorkout from './img/screens/workout.png';
import ScreenWeather from './img/screens/weather.png';
import ScreenPasswordGenerator from './img/screens/password-generator.png';
import ScreenGasandoil from './img/screens/gasandoil.jpg';
import ScreenGasandoilBlog from './img/screens/gasandoil-blog.jpg';
import ScreenAttornme from './img/screens/attornme.jpg';
import ScreenAvalanche from './img/screens/avalanche.jpg';
import ScreenEgallery from './img/screens/egallery.jpg';

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
      ScreenPliggHome,
      ScreenPligg2,
      ScreenPligg4,
      ScreenPliggDemo
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
      ScreenCodifyHome,
      ScreenCodifyJobDetail,
      ScreenCodifyDashboard,
      ScreenCodifyLogin 
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
      ScreenCovid1,
      ScreenCovid2,
      ScreenCovid3,
      ScreenCovid4
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
      ScreenJohnson,
      ScreenJohnsonBlog,
      ScreenJohnsonAttorneys,
      ScreenJohnsonContact
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
      ScreenAgenda,
      ScreenAgendaGolden
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
      ScreenTrackTv,
      ScreenTrackTvSearch
    ]
  },
  {
    id: 6,
    title: "Workout Journal",
    tags: "JavaScript · jQuery · Node.js · Express · MongoDB",
    description: "Create a workout plan, add exercises, and manage routines.",
    url: "https://obscure-garden-30566.herokuapp.com/",
    github: "https://github.com/yankidank/workout",
    preview: "https://obscure-garden-30566.herokuapp.com/",
    screens: [
      ScreenWorkout
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
      ScreenWeather
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
      ScreenPasswordGenerator
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
      ScreenGasandoil,
      ScreenGasandoilBlog
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
      ScreenAttornme
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
      ScreenAvalanche
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
      ScreenEgallery
    ]
  }
];

class App extends Component {

  componentDidMount(){

    // Tilt
    VanillaTilt.init(document.querySelectorAll(".portfolio-row div .projects_wrapper_left"), {
    	reverse: true,
    	max: 5,
    	scale: 1.05,
    	speed: 4000,
    	perspective: 2000,
    	easing: "cubic-bezier(.03,.98,.52,.99)"
    });
    VanillaTilt.init(document.querySelector(".header"), {
    	reverse: true,
    	max: 7,
    	speed: 5500,
    	startY: -50,
      easing: "cubic-bezier(.05,.94,.5,.9)",
    	gyroscope:   true,
      gyroscopeMinAngleX: -50,
      gyroscopeMaxAngleX:  50,
      gyroscopeMinAngleY: -40,
      gyroscopeMaxAngleY:  40
    });
    VanillaTilt.init(document.querySelector(".footer-contact"), {
    	reverse: true,
    	max: 8,
    	scale: 1.25,
    	speed: 4000,
    	easing: "cubic-bezier(.07,.98,.52,.99)",
    	gyroscope:   true,
      gyroscopeMinAngleX: -55,
      gyroscopeMaxAngleX:  55,
      gyroscopeMinAngleY: -55,
      gyroscopeMaxAngleY:  55
    });

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
                              description="I'm a Full Stack developer specializing in UI/UX design. I hold a Bachelor of Fine Arts from Savannah College of Art and Design and a certificate in Full Stack Web Development from UCLA Extension. Technically proficient with both MERN (MongoDB, Express, React, Node) and LAMP (Linux, Apache, MySQL, PHP) stacks. Founded and developed the popular open source project Pligg CMS." 
                              personal="My interests outside of web development include music, photography, travel, finance, and politics." 
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
                              description="I'm a Full Stack developer specializing in UI/UX design. I hold a Bachelor of Fine Arts from Savannah College of Art and Design and a certificate in Full Stack Web Development from UCLA Extension. Technically proficient with both MERN (MongoDB, Express, React, Node) and LAMP (Linux, Apache, MySQL, PHP) stacks. Founded and developed the popular open source project Pligg CMS." 
                              personal="My interests outside of web development include music, photography, travel, finance, and politics." 
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
            <Footer email={email} github={github} linkedin={linkedin} />
        </div>
      </Router>
    );
  }
}

export default App;
