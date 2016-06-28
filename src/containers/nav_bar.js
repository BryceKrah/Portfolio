import React, { Component } from 'react';
import ReactRouter, { Link } from 'react-router';

export default class Nav extends Component {

  render() {
    return (
      <div className="navbar-container">
        <nav>
          <Link to="/" className="nav-item">Home</Link>
        </nav>
        <nav>
          <Link to="about" className="nav-item">About</Link>
          <Link to="work" className="nav-item" name="work">Work</Link>
          <Link to="skills" className="nav-item">Skills</Link>
          <Link to="contact" className="nav-item">Contact</Link>
        </nav>
      </div>
    );
  }
}
