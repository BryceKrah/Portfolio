import React, { Component } from 'react';

export default class Nav extends Component {

  renderView(event){
      event.preventDefault();
      console.log(event.target.name);
      console.log(this.props.viewShown);
      //this.props.setState({ view: event.target.name })
  }

  render() {
    return (
      <div className="navbar-container">
        <nav>
          <a href="#" className="nav-item">Home</a>
        </nav>
        <nav>
          <a href="#about" className="nav-item">About</a>
          <a href="#work" className="nav-item" name="work" onClick={this.renderView}>Work</a>
          <a href="#skills" className="nav-item">Skills</a>
          <a href="#" className="nav-item">Contact</a>
        </nav>
      </div>
    );
  }
}
