import React, { Component } from 'react';
import Nav from './nav_bar';


export default class Work extends Component {

  render() {
    return (
      <div className="section">
        <Nav />
        <h1 className="section-header">Works</h1>
        <div className="works-container">
          <div className="works-item">
            <h1 className="works-header">Three Point Shootout</h1>
            <img className="works-img" src="../images/shootout.png"></img>
            <p>My very first JavaScript game: Two player classic arcade style basketball game. Designed to show off some of the fun stuff you can do with jQuery.</p>
          </div>
          <div className="works-item">
            <h1 className="works-header">Show Tracker</h1>
            <img className="works-img" src="../images/showtracker.png"></img>
            <p>Full CRUD application for creating lists of your favorite TV shows. Backend is built on top of Node and Express with a PostgreSQL database. The Front end is JavaScript, HTML and CSS</p>
          </div>
          <div className="works-item">
            <h1 className="works-header">Climate Change Visualization</h1>
            <img className="works-img" src="../images/climate.png"></img>
            <p>A visual representation of climate change in the United States over the past 100 years. The front end is done using React with the JavaScript library D3.js for the data visualization.</p>
          </div>
          <div className="works-item">
            <h1 className="works-header">Babylon Driver</h1>
            <img className="works-img" src="../images/driver.png"></img>
            <p>A 3D driving game built with the JavaScript library Babylon.js, Canvas, and JavaScript. I bet you can't beat my high score!</p>
          </div>
          <div className="works-item">
            <h1 className="works-header">YouTube + React</h1>
            <img className="works-img" src="../images/youtube.png"></img>
            <p>A web application using React and and the YouTube API. Displays youtube videos based off you search results and updates the suggested playlist in real time as you search.</p>
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
