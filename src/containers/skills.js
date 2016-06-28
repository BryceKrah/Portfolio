import React, { Component } from 'react';
import Nav from './nav_bar';

export default class Skills extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="section">
          <h1 className="section-header">Skills</h1>
          <div className="resume-container">
              <iframe height="950px" width="100%" src="../images/resume.pdf">something will go here</iframe>
          </div>
        </div>
      </div>
    );
  }
}
