import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import ImagelinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import './App.css';
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
      number: {
        values: 30,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
        params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImagelinkForm />
        {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
