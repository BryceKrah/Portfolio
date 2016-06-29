import React, { Component } from 'react';
import Nav from '../containers/nav_bar';
import Works from '../containers/work';
import About from '../containers/about';
import Icons from '../containers/icons';

export default class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div className="main">
          <div className="main-header">Bryce Krah is a Software Developer</div>
          <div className="main-header">based out of New York City.</div>
        </div>
        <Works />
        <Icons />
      </div>
    );
  }
}
