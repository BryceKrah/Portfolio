import React, { Component } from 'react';
import Nav from './nav_bar';
import Icons from './icons';

export default class Skills extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="section">
          <h1 className="section-header">Relevant Skills</h1>
          <div className="skills-container">
            <div className="skills-subcontainer">
              <div className="skills-item">JavaScript</div>
              <div className="skills-item">Ruby</div>
              <div className="skills-item">Java</div>
              <div className="skills-item">HTML/CSS</div>
            </div>
            <div className="skills-subcontainer">
              <div className="skills-item">PostgreSQL</div>
              <div className="skills-item">MySQL</div>
            </div>
            <div className="skills-subcontainer">
              <div className="skills-item">ReactJS</div>
              <div className="skills-item">jQuery</div>
              <div className="skills-item">Wordpress</div>
              <div className="skills-item">BabylonJS</div>
              <div className="skills-item">React-Native</div>
            </div>
            <div className="skills-subcontainer">
              <div className="skills-item">NodeJS</div>
              <div className="skills-item">ExpressJS</div>
              <div className="skills-item">Rails</div>
              <div className="skills-item">EJS</div>
            </div>
            <div className="skills-subcontainer">
              <div className="skills-item">Grunt</div>
              <div className="skills-item">Webpack</div>
              <div className="skills-item">Browserify</div>
            </div>
            <div className="skills-subcontainer">
              <div className="skills-item">Git</div>
              <div className="skills-item">Github</div>
              <div className="skills-item">Basecamp</div>
              <div className="skills-item">Bitbucket</div>
            </div>
          </div>
        </div>
        <div className="section">
          <h1 className="section-header">A PDF copy of my Resume</h1>
          <div className="resume-container">
              <iframe height="950px" width="100%" src="../images/resume.pdf">something will go here</iframe>
          </div>
        </div>
        <Icons />
      </div>
    );
  }
}
