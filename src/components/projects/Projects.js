import React from "react";
import barstock from "../../assests/barstock.png";
import poketcg from "../../assests/pokemon.png";
import thesaurus from "../../assests/thesaurus.png";
import { ReactComponent as Github } from "../../assests/github.svg";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
          <article className="project-card">
              <div className="description-container">
                  <h2>Barstock</h2>
                  <p>
                  BarStock is a native application designed to solve the communication challenges between bar owners and distributors when placing inventory orders. BarStock is intended to alleviate this headache by providing bar owners with user interface to view distributor inventory, analyze profit margins, and automate text message/email ordering.
                  </p>
                  <div className="link">
                    <a href="https://github.com/Inzurriaga" rel="noopener noreferrer" target="_blank">
                      <Github />
                    </a>
                  </div>
              </div>
              <div className="image-container">
                <img src={barstock} alt="barstock application"/>
                <div className="tech">
                  <p>REACT NATIVE / JAVASCRIPT / HTML / SASS</p>
                </div>
              </div>
          </article>
          <article className="project-card">
          <div className="description-container">
                  <h2>Pokemon TCG</h2>
                  <p>
                  An application which allows users to search their favorite Pokémon cards. users can view the card image and information about the card. The application uses the Pokemon TCG API for the data
                  </p>
              </div>
            <div className="image-container">
              <img src={poketcg} alt="barstock application"/>
              <div className="tech">
                  <p>REACT / JAVASCRIPT / HTML / SASS / REDUX</p>
                </div>
            </div>
          </article>
          <article className="project-card">
          <div className="description-container">
                  <h2>Thesaurus</h2>
                  <p>
                  A take home challenge to learn a new frameWork and create an application with it. The application allows the user to search a word and view the defintion and synonyms. The user can also click any of the synonyms to search on that word.
                  </p>
              </div>
            <div className="image-container">
              <img src={thesaurus} alt="thesaurus application"/>
              <div className="tech">
                  <p>VUE / JAVASCRIPT / HTML / SASS </p>
                </div>
            </div>
          </article>
          <article className="project-card">
            <div>

            </div>
          </article>
          <article className="project-card">
            <div>

            </div>
          </article>
      </div>
    </section>
  )
}

export default Projects;