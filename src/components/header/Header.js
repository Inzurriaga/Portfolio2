import React from "react";
import { ReactComponent as Home }from "../../assests/home.svg";
import { ReactComponent as About } from "../../assests/about.svg";
import { ReactComponent as Projects } from "../../assests/projects.svg";

function Header(props) {
  let { pageAnim } = props;
  return(
    <nav>
      <div className="home nav-button" onClick={() => pageAnim("home")}>
          <Home />
          <div>
            <p>Home</p>
          </div>
      </div>
      <div className="about nav-button" onClick={() => props.pageAnim("about")}>
          <About />
          <div>
            <p>About</p>
          </div>
      </div>
      <div className="projects nav-button" onClick={() => pageAnim("projects")}>
          <Projects />
          <div>
            <p>Projects</p>
          </div>
      </div>
    </nav>
  )
}

export default Header;