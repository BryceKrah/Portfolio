import React, { Component } from 'react';
import Nav from './nav_bar';


export default class About extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="section">
          <h1 className="section-header">Bryce Krah</h1>
          <div className="about-container">
            <div>I am a software developer living in Brooklyn, New York. During the day I am interning as a Web Developer for ThomasNet where I collaborate with our design and marketing team to create modern, responsive websites for clients. At night, I work as a Code Advisor for Codecademy.com, providing mentorship to pro members where I review their code, debug issues, and help them get unstuck.</div>
            <div>When I am not immersed in my coding endeavors, I am usually watching/playing basketball, or wreaking havoc in Halo.</div>
          </div>
        </div>
      </div>

    );
  }
}
