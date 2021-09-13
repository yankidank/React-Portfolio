import React, {Component} from 'react';
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';
import './App.css';
import Home from './components/Home';
class App extends Component {

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
