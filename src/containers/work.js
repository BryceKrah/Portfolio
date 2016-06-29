import React, { Component } from 'react';
import Nav from './nav_bar';
import Icons from './icons';


export default class Work extends Component {

  render() {
    return (
      <div>
          <div className="works-container">
            <div className="works-item">
              <img className="works-img" src="../images/shootout.png"></img>
            </div>
            <div className="works-item">
              <img className="works-img" src="../images/showtracker.png"></img>
            </div>
            <div className="works-item">
              <img className="works-img" src="../images/climate.png"></img>
            </div>
            <div className="works-item">
              <img className="works-img" src="../images/driver.png"></img>
            </div>
            <div className="works-item">
              <img className="works-img" src="../images/youtube.png"></img>
            </div>
        </div>
      </div>
    );
  }
}
