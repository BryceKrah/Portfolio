import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar-container">
          <button className="nav-item">Home</button>
          <button className="nav-item">About</button>
          <button className="nav-item">Works</button>
          <button className="nav-item">Resume</button>
          <button className="nav-item">Contact</button>
      </div>
    );
  }
}
