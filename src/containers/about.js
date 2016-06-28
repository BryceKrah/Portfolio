import React, { Component } from 'react';
import Nav from './nav_bar';


export default class About extends Component {
  render() {
    return (
      <div className="section">
        <Nav />
        <h1 className="section-header">About</h1>
        <div className="about-container">
          <h1 className="about-header">Bryce Krah</h1>
          <h1 className="about-header">Skills</h1>
          <h1 className="about-header">Bio</h1>
        </div>
      </div>
    );
  }
}
