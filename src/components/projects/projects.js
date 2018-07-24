import React from 'react'
import './_projects.scss'

export const Projects = () => (
  <section id="projects" className="projects">
    <h2>My Latest Projects</h2>
    <div className="projects_container">
      {/* Project Item ---------- */}
      <div className="project project-two">
        <a href="https://travisfrazier.github.io/cardinal/" target="_blank">
          <img src={require('../../images/projects/cardinal.png')} />
          <div className="project-inner">
            <div className="project-info">
              <h3>Cardinal</h3>
              <p>
                Developed website following design spec. Built with: SASS,
                HTML5, and vanilla JavaScript.
              </p>
              <span>View Site</span>
            </div>
          </div>
        </a>
      </div>
      {/* Project Item ---------- */}
      <div className="project project-two">
        <a
          href="https://codepen.io/travisfrazier/project/live/ZdbBJv/"
          target="_blank"
        >
          <img src={require('../../images/projects/drum.png')} />
          <div className="project-inner">
            <div className="project-info">
              <h3>Vanilla JS Drum Pad</h3>
              <p>
                Designed and Developed a single page drum pad application. Built
                with: vanilla JavaScript, CSS3, and HTML5.
              </p>
              <span>View Site</span>
            </div>
          </div>
        </a>
      </div>
      {/* Project Item ---------- */}
      <div className="project project-two">
        <a
          href="https://travisfrazier.github.io/react-list-app/"
          target="_blank"
        >
          <img src={require('../../images/projects/list.png')} />
          <div className="project-inner">
            <div className="project-info">
              <h3>React List App</h3>
              <p>
                Designed and Developed a single page to-do app. Built with:
                React.js and SASS.
              </p>
              <span>View Site</span>
            </div>
          </div>
        </a>
      </div>
      {/* Project Item ---------- */}
      <div className="project project-two">
        <a href="https://socialenneagram.netlify.com" target="_blank">
          <img src={require('../../images/projects/enneagram.png')} />
          <div className="project-inner">
            <div className="project-info">
              <h3>Social Enneagram</h3>
              <p>
                Designed and Developed freelance client website (work in
                progress). Built with: Gatsby.js/React (static site generator
                for React) and SASS.
              </p>
              <span>View Site</span>
            </div>
          </div>
        </a>
      </div>
      {/* Project Item ---------- */}
      <div className="project project-two">
        <a href="https://queensboro.com" target="_blank">
          <img src={require('../../images/projects/queensboro.png')} />
          <div className="project-inner">
            <div className="project-info">
              <h3>Queensboro Shirt Company</h3>
              <p>
                Designed and Developed aspects for Queensboro.com. Built with:
                HTML5, CSS3, JavaScript, jQuery, and Bootstrap.
              </p>
              <span>View Site</span>
            </div>
          </div>
        </a>
      </div>
      {/* Project Item ---------- */}
      <div className="project project-two">
        <a href="https://travisfrazier.github.io/pool/" target="_blank">
          <img src={require('../../images/projects/pool.png')} />
          <div className="project-inner">
            <div className="project-info">
              <h3>Pool Pros</h3>
              <p>
                Developed demo website following design spec. Built with: HTML5,
                SASS, and vanilla JavaScript for the modal pop up and mobile
                navigation dropdown.
              </p>
              <span>View Site</span>
            </div>
          </div>
        </a>
      </div>
      {/* Project Item ---------- */}
      <div className="project project-two">
        <a href="https://codepen.io/travisfrazier/live/bKyzep" target="_blank">
          <img src={require('../../images/projects/weather.png')} />
          <div className="project-inner">
            <div className="project-info">
              <h3>Weather App</h3>
              <p>
                Designed and Developed a single page weather app. Built with:
                vanilla JavaScript, Fetch API, SASS, and HTML5.
              </p>
              <span>View Site</span>
            </div>
          </div>
        </a>
      </div>
      {/* Project Item ---------- */}
      <div className="project project-two">
        <a href="https://travisfrazier.github.io/fotomatic/" target="_blank">
          <img src={require('../../images/projects/fotomatic.png')} />
          <div className="project-inner">
            <div className="project-info">
              <h3>Fotomatic</h3>
              <p>
                Developed demo product launch page. Built with: vanilla
                JavaScript for the image slider and modal, CSS3, and HTML5.
              </p>
              <span>View Site</span>
            </div>
          </div>
        </a>
      </div>
      {/* Project Item ---------- */}
      <div className="project project-two">
        <a href="https://travisfrazier.github.io/ethanjones/" target="_blank">
          <img src={require('../../images/projects/ethan.png')} />
          <div className="project-inner">
            <div className="project-info">
              <h3>Ethan Jones</h3>
              <p>
                Designed and Developed freelance client website. Built with:
                HTML5, CSS3, Bootstrap 4, and jQuery.
              </p>
              <span>View Site</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
)
