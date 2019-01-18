/* eslint-disable no-restricted-globals */
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
  componentDidMount() {
    window.window.$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = window.$(this.hash);
        target = target.length ? target : window.$('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          window.$('html, body').animate({
            scrollTop: (target.offset().top - 70)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    window.$('.js-scroll-trigger').click(function() {
      window.$('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    window.$('body').scrollspy({
      target: '#mainNav',
      offset: 100
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if (window.$("#mainNav").offset().top > 100) {
        window.$("#mainNav").addClass("navbar-shrink");
      } else {
        window.$("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    window.$(window).scroll(navbarCollapse);
  }

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