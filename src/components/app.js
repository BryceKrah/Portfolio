import React, { Component } from 'react';
import Nav from '../containers/nav_bar';
import Works from '../containers/works';
import Resume from '../containers/resume';
import About from '../containers/about';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="main">
          <h1 className="main-header">Bryce Krah</h1>
          <h3 className="main-subheader">Software Developer</h3>
        </div>
        <Works />
        <Resume />
        <About />
      </div>
    );
  }
}
