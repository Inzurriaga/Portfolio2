import React, { Component } from 'react';
import Home from "../home/Home";
import About from "../about/About";
import Projects from "../projects/Projects";
import Easter from "../easter/Easter";
import Header from "../header/Header";

class App extends Component {
  constructor() {
    super();
    this.scale = 1;
    this.rotateDeg = 0;
    this.rotateIncrement = 3;
    this.animation = null;
    this.animationActive = false;
    this.page = "home";
    this.pages = {
      home: 0,
      about: 90,
      projects: 180,
      easter: 270
    };
  }

  pageAnimation = (page) => {
    if(this.page !== page && !this.animationActive) {
      if(this.pages[page] >= this.rotateDeg) {
        this.rotateIncrement = 3;
      } else {
        this.rotateIncrement = -3;
      }
      this.animationActive = true;
      this.page = page;
      this.scaleOut();
    }
  }

  scaleOut = () => {
    this.animation = requestAnimationFrame(this.scaleOut);
    this.scale -= 0.04;
    this.refs.scale.style.transform = `scale(${this.scale})`;
    if(this.scale <= 0.5) {
      cancelAnimationFrame(this.animation);
      this.rotate();
    }
  }

  rotate = () => {
    this.animation = requestAnimationFrame(this.rotate);
    this.rotateDeg += this.rotateIncrement;
    this.refs.rotate.style.transform = `rotateY(${this.rotateDeg}deg)`;
    if(this.rotateDeg === this.pages[this.page]) {
      cancelAnimationFrame(this.animation);
      this.scaleIn();
    }
  }

  scaleIn = () => {
    this.animation = requestAnimationFrame(this.scaleIn);
    this.scale += 0.04;
    this.refs.scale.style.transform = `scale(${this.scale})`
    if(this.scale >= 1) {
      cancelAnimationFrame(this.animation);
      this.animationActive = false;
      this.scale = 1;
    }
  }

  render() {
    return (
      <div className="App">
          <Header pageAnim={this.pageAnimation} page={this.page}/>
          <div id="cube-scale" ref="scale">
            <div id="cube-rotate" ref="rotate">
              <Home page={this.page}/>
              <About />
              <Projects />
              <Easter />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
