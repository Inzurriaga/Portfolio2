import React from "react";
import skillDistilleryLogo from "../../assests/skilldistillery_correct_box_trans-GJsm.png";
import turingLogo from "../../assests/TuringSchool_LogoMark_Gray.png";
import oca from "../../assests/5274_badge_database_admininstrator_600x600_Certified-Associate-JAVA-SE8-PROGRAMMER-1.png"

function About() {
  return(
    <section id="about">
      <div className="container">
        <article className="about-text">
          <h2>About Me</h2>
          <p className="about-desc">I'm a Full-Stack Developer and Veteran living in Denver, CO. I am passionate about learning new tech. I specialize in creating web application using java in the back-end and react in the front-end. </p>
          <div className="word-collage">
            <p>
              <span>JAVA</span>
              <span>JAVASCRIPT</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>SQL</span>
              <span>REACT</span>
              <span>NODE.JS</span>
              <span>GIT</span>
              <span>GITHUB</span>
              <span>REACT NATIVE</span>
              <span>JQUERY</span>
              <span>OOP</span>
              <span>MYSQL</span>
              <span>POSTGRES</span>
              <span>JEST</span>
              <span>CHAI</span>
              <span>MOCHA</span>
              <span>ENZYME</span>
              <span>THREE.JS</span>
              <span>BOOTSTRAP</span>
              <span>EXPRESS.JS</span>
              <span>NPM</span>
              <span>GRADLE</span>
              <span>REDUX</span>
              <span>SASS</span>
              <span>SPRING BOOT</span>
              <span>SPRING MVC</span>
              <span>JPA</span>
              <span>MAVEN</span>
              <span>REST</span>
            </p>
          </div>
        </article>
        <article className="edu">
          <h2>Experience/Education</h2>
          <div>
              <div>
                <img src={skillDistilleryLogo} alt="Skill Distillery Logo"/>
                <div className="name">
                  <h3>Skill Distillery</h3>
                  <h4>Full-Stack Java Developer</h4>
                </div>
              </div>
              <hr />
              <p>Skill Distillery’s training program is a 16-week, immersive, hands-on, coding school where you will learn the most critical programming skills to build a lasting career not only as a web developer but as a full-stack Java application developer.</p>
          </div>
          <div>
            <div>
              <img src={turingLogo} alt="Turing Logo"/>
              <div className="name">
                <h3>Turing</h3>
                <h4>Front-End Developer</h4>
              </div>
            </div>
            <hr />
            <p>Turing School is a 7 month, in person, full-time computer programming school in Denver, CO.The Front-End program focuses on building the "client side" of applications that is accessible to all users and efficiently processes large and complex data sets.</p>
          </div>
          <div>
            <div>
              <img src={oca} alt="OCA Certificate"/>
              <div className="name">
                <h3>Oracle Certified Associate </h3>
                <h4>Java Developer</h4>
              </div>
              <hr />
              <p>The Java SE 8 Oracle Certified Associate (OCA) certification helps you build a foundational understanding of Java, and gaining this certification credential is the first of two steps in demonstrating you have the high-level skills needed to become a professional Java developer.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About;