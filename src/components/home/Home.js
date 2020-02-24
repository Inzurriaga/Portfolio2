import React from "react";
import Particles from "react-particles-js";
import { ReactComponent as Github } from "../../assests/github.svg";
import { ReactComponent as Linkedin } from "../../assests/linkedin.svg";

function Home() {
    return (
      <section id="home">
        <div className="home-text">
          <h1>
            <span>G</span>
            <span>a</span>
            <span>b</span>
            <span>r</span>
            <span>i</span>
            <span>e</span>
            <span>l&nbsp;</span>
            <span>I</span>
            <span>n</span>
            <span>z</span>
            <span>u</span>
            <span>r</span>
            <span>r</span>
            <span>i</span>
            <span>a</span>
            <span>g</span>
            <span>a</span>
          </h1>
          <p>Full Stack Developer</p>
          <div className="links">
            <a href="https://github.com/Inzurriaga" rel="noopener noreferrer" target="_blank">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-inzurriaga-8b24a3177" rel="noopener noreferrer" target="_blank">
              <Linkedin />
            </a>
          </div>
        </div>
        <Particles 
          params={{
            particles: {
              number: {
                value: 150
              },
              color: {
                value: "#000000"
              },
              line_linked: {
                color: "#000000",
                width: 2
              }
            }
          }}/>
      </section>
    )
}

export default Home;