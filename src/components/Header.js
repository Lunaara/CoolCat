import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">Cool Cat</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">Not hoomaan master of I.</h2>
            <a href="#about" className="btn btn-primary js-scroll-trigger">Meow</a>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;