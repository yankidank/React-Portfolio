import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VanillaTilt from 'vanilla-tilt';
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Resume from './components/Resume';
import Footer from './components/Footer';
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
      easing: "cubic-bezier(.05,.94,.5,.9)"
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
      <EasybaseProvider ebconfig={ebconfig}>
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
                          <Route path="/resume/">
                            <div className="row">
                              <Resume />
                            </div>
                          </Route>
                          <Route path="/about/">
                            <div className="row">
                              <About 
                                title="About Me" 
                                description="I'm a Full Stack developer specializing in UI/UX design. I hold a Bachelor of Fine Arts from Savannah College of Art and Design and a certificate in Full Stack Web Development from UCLA Extension. Technically proficient with both MERN (MongoDB, Express, React, Node) and LAMP (Linux, Apache, MySQL, PHP) stacks. Founded and developed the popular open source project Pligg CMS." 
                                personal="My interests outside of web development include music, photography, travel, finance, and politics." 
                              />
                              <Contact />
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
                          <Route path="/project/:id" render={(props) => <Project {...props}/>}></Route>
                          <Route path="/">
                            <div className="row">
                              <About 
                                title="About Me" 
                                description="I'm a Full Stack developer specializing in UI/UX design. I hold a Bachelor of Fine Arts from Savannah College of Art and Design and a certificate in Full Stack Web Development from UCLA Extension. Technically proficient with both MERN (MongoDB, Express, React, Node) and LAMP (Linux, Apache, MySQL, PHP) stacks. Founded and developed the popular open source project Pligg CMS." 
                                personal="My interests outside of web development include music, photography, travel, finance, and politics." 
                              />
                              <Contact 
                                title="Contact" 
                              />
                            </div>
                            <Education title="Education" school1="UCLA Extension Coding Bootcamp" school1_description="Full Stack Web Development" school2="Savannah College of Art and Design" school2_description="B.F.A. Film and Television Production" />
                            <Skills />                         
                            <div className="row">
                              <div className="column">
                                <h2>Projects</h2>
                              </div>
                            </div>
                            <Portfolio />
                          </Route>
                        </Switch>                      
                      </div>
                    </div>
                    <div className="column column-5"> </div>
                  </div>
                </div>
              </main>
              <div className="page-divider"></div>
              <Footer />
          </div>
        </Router> 
      </EasybaseProvider>
    );
  }
}

export default App;
