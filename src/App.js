import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Project from './components/Project';
import Footer from './components/Footer';

const email = 'eric@ericheikkinen.com';
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

  componentDidMount(){
    const vanilla = document.createElement("script");
    vanilla.src = "./assets/js/vanilla-tilt.min.js";
    vanilla.async = true;
    document.body.appendChild(vanilla);
    const script = document.createElement("script");
    script.src = "./assets/js/index.js";
    script.async = true;
    document.body.appendChild(script);
  }

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
                      <Contact title="Contact" email={email} github={github} linkedin={linkedin} resume="Heikkinen_Resume.pdf" />
                    </div>
                    <Education title="Education" school1="UCLA Extension Coding Bootcamp" school1_description="Full Stack Web Development" school2="Savannah College of Art and Design" school2_description="B.F.A. Film and Television Production" />
                    <div className="row">
                      <div className="column">
                        <h2>Projects</h2>
                      </div>
                    </div>
                    <Project cards={portfolio} />
                  </div>
                </div>
                <div className="column column-5"> </div>
              </div>
            </div>
          </main>
          <div className="page-divider"></div>
          <div id="thenet" title="Ctrl+Shift"></div>
          <Footer email={email} github={github} linkedin={linkedin} />
          {/* {this.state.toggle && <p>Hello</p> }
          <button onClick={this.toggle}>Toggle</button> */}
      </div>
    );
  }
}

export default App;
