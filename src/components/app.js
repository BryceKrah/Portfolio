import React, { Component } from 'react';
import Nav from '../containers/nav_bar';
import Works from '../containers/work';
import About from '../containers/about';
import Contact from '../containers/contact';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = { view: 'Hello' };
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="main">
          <h1 className="main-header">Bryce Krah</h1>
          <h3 className="main-subheader">Software Developer</h3>
        </div>
      </div>
    );
  }
}
