import React, {Component} from 'react';
import VanillaTilt from 'vanilla-tilt';
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';
import './App.css';
import Home from './components/Home';
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
        <div className="App">
          <Home />
        </div>
      </EasybaseProvider>
    );
  }
}

export default App;
