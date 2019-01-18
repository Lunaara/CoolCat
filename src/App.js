import React, { Component } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="page-top">
        <Nav />
        <Header />
        <About />
        <Projects />
        <Signup />
        <Contact />
        <Footer />
      </div>
    );
  }
}
    
export default App;