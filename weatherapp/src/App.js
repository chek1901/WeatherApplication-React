import React, {Component} from 'react';
import './App.css';
import NavbarRouter from './Components/NavRouter/NavbarRouter';
import Navbar from './Components/NavRouter/Navbar';


class App extends Component {

  render() {

    return (
      <div className="App">
        <React.Fragment>
          <Navbar/>
          <NavbarRouter/>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
