import React, {useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VanillaTilt from 'vanilla-tilt';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Education from './Education';
import Portfolio from './Portfolio';
import Project from './Project';
import Resume from './Resume';
import Footer from './Footer';

function Home() {
    useEffect(() => {
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
    }, [])
    return (
        <Router>
            <Header title="Eric Heikkinen" description="Los Angeles • California" />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="column column-5"> </div>
                        <div className="column column-90 wrapper main_content content_wrapper">	
                            <div className="container">
                                <Switch>
                                    <Route path="/project/:id" render={(props) => <Project {...props}/>}></Route>
                                    <Route path="/resume/">
                                        <div className="row">
                                            <Resume />
                                        </div>
                                    </Route>
                                    <Route path="/about/">
                                        <div className="row">
                                            <About 
                                                description="I'm a Full Stack developer specializing in UI/UX design. I hold a Bachelor of Fine Arts from Savannah College of Art and Design and a certificate in Full Stack Web Development from UCLA Extension. Technically proficient with both MERN (MongoDB, Express, React, Node) and LAMP (Linux, Apache, MySQL, PHP) stacks. Founded and developed the popular open source project Pligg CMS." 
                                                personal="My interests outside of web development include music, photography, travel, finance, and politics." 
                                            />
                                            <Contact />
                                        </div>
                                        <Education 
                                            school1="UCLA Extension Coding Bootcamp" 
                                            school1_description="Full Stack Web Development" 
                                            school2="Savannah College of Art and Design" 
                                            school2_description="B.F.A. Film and Television Production" 
                                        />
                                        <Skills />
                                    </Route>
                                    <Route path="/">
                                        <div className="row">
                                            <About 
                                                description="I'm a Full Stack developer specializing in UI/UX design. I hold a Bachelor of Fine Arts from Savannah College of Art and Design and a certificate in Full Stack Web Development from UCLA Extension. Technically proficient with both MERN (MongoDB, Express, React, Node) and LAMP (Linux, Apache, MySQL, PHP) stacks. Founded and developed the popular open source project Pligg CMS." 
                                                personal="My interests outside of web development include music, photography, travel, finance, and politics." 
                                            />
                                            <Contact />
                                        </div>
                                        <Education school1="UCLA Extension Coding Bootcamp" school1_description="Full Stack Web Development" school2="Savannah College of Art and Design" school2_description="B.F.A. Film and Television Production" />
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
        </Router>
    )
}

export default Home
