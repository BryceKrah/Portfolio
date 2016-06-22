import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return (
      <div className="section">
        <h1 className="section-header">Resume</h1>
        <div className="resume-container">
            <iframe height="900px" width="100%" src="../images/resume.pdf">something will go here</iframe>
        </div>
      </div>
    );
  }
}
