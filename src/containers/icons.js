import React, { Component } from 'react';
import Nav from './nav_bar';

export default class Icons extends Component {
  render() {
    return (
        <div className="icon-container">
          <a href="//github.com/brycekrah"><div className="icon-image icon-github"></div></a>
          <a href="//linkedin.com/in/brycekrah"><div className="icon-image icon-linkedin"></div></a>
          <a href="mailto:krahbryce@yahoo.com"><div className="icon-image icon-email"></div></a>
        </div>
    );
  }
}
