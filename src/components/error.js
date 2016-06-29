import React, { Component } from 'react';
import Nav from '../containers/nav_bar';
import Icons from '../containers/icons';


export default class Err extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div className="main">
          <div className="main-header">404 Error - Sorry that page does not exist!</div>
        </div>
        <Icons />
      </div>
    );
  }
}
