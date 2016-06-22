import React, { Component } from 'react';

export default class Works extends Component {
  render() {
    return (
      <div className="section">
        <h1 className="section-header">Works</h1>
        <div className="works-container">
          <div className="works-item">
            <h1 className="works-header">Three Point Shootout</h1>
            <img className="works-img" src="../images/shootout.png"></img>
          </div>
          <div className="works-item">
            <h1 className="works-header">Show Tracker</h1>
            <img className="works-img" src="../images/showtracker.png"></img>
          </div>
          <div className="works-item">
            <h1 className="works-header">Climate Change Visualization</h1>
            <img className="works-img" src="../images/climate.png"></img>
          </div>
          <div className="works-item">
            <h1 className="works-header">Babylon Driver</h1>
            <img className="works-img" src="../images/driver.png"></img>
          </div>
          <div className="works-item">
            <h1 className="works-header">YouTube + React</h1>
            <img className="works-img" src="../images/youtube.png"></img>
          </div>
          <div className="works-item">
            <h1 className="works-header">Redux + Weather</h1>
            <img className="works-img" src=""></img>
          </div>
        </div>
      </div>
    );
  }
}
