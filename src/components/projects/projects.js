import React from 'react'
import './_projects.scss'

export const Projects = () => (
  <section id="projects" className="projects">
    <h2>My Latest Projects</h2>
    <p className="project-disclaimer">
      *Projects below were built by me without the use of jQuery. Hover each for
      a description. They are fully responsive with media queries.
    </p>
    <div className="projects_container">
      {/* Project Item ---------- */}
      <div className="project project-two">
        <a href="https://emanatesummit.com" target="_blank">
          <img src={require('../../images/projects/emanate.png')} />
          <div className="project-inner">
            <div className="project-info">
              <h3>Emanate Summit</h3>
              <p>
                Designed and Developed freelance client website (work in
                progress). Built with: ReactJS and SASS.
              </p>
              <span>View Site</span>
            </div>
          </div>
        </a>
      </div>
      {/* Project Item ---------- */}
      <div className="project project-two">
        <a href="https://reactlistapp.netlify.com" target="_blank">
          <img src={require('../../images/projects/list.png')} />
          <div className="project-inner">
            <div className="project-info">
              <h3>React List App</h3>
              <p>
                Designed and Developed a single page to-do app. Built with:
                ReactJS and SASS.
              </p>
              <span>View Site</span>
            </div>
          </div>
        </a>
      </div>
      {/* Project Item ---------- */}
      <div className="project project-two">
        <a href="https://codepen.io/travisfrazier/full/bKyzep/" target="_blank">
          <img src={require('../../images/projects/weather.png')} />
          <div className="project-inner">
            <div className="project-info">
              <h3>Vanilla JS Weather App</h3>
              <p>
                Designed and Developed a single page weather app. Built with:
                Vanilla JavaScript, Fetch API, and SASS.
              </p>
              <span>View Site</span>
            </div>
          </div>
        </a>
      </div>
      {/* Project Item ---------- */}
      <div className="project project-two">
        <a href="https://mimosasnailbars.com" target="_blank">
          <img src={require('../../images/projects/mimosas-new.png')} />
          <div className="project-inner">
            <div className="project-info">
              <h3>Mimosas Nail Bar (work in progress)</h3>
              <p>
                Developed client website following design spec. Incorporates a Headless CMS for content updates. Built with: SASS,
                HTML5, Vanilla JavaScript, VueJS, and Jekyll.
              </p>
              <span>View Site</span>
            </div>
          </div>
        </a>
      </div>
      {/* Project Item ---------- */}
      <div className="project project-two">
        <a
          href="https://travisfrazier.github.io/vue-drum-pad/"
          target="_blank"
        >
          <img src={require('../../images/projects/mpc-kit.png')} />
          <div className="project-inner">
            <div className="project-info">
              <h3>VueJS Drum Pad</h3>
              <p>
                Designed and Developed a single page drum pad application. Built
                with: VueJS CDN, SASS, and HTML5.
              </p>
              <span>View Site</span>
            </div>
          </div>
        </a>
      </div>
      {/* Project Item ---------- */}
      <div className="project project-two">
        <a href="https://crosstalk.church" target="_blank">
          <img src={require('../../images/projects/crosstalk.png')} />
          <div className="project-inner">
            <div className="project-info">
              <h3>Cross Talk</h3>
              <p>
                Designed and Developed freelance client landing page. Built
                with: ReactJS and SASS.
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
                Developed demo website following design spec. Built with: SASS,
                Vanilla JavaScript for the modal pop up and mobile navigation
                dropdown, and HTML5.
              </p>
              <span>View Site</span>
            </div>
          </div>
        </a>
      </div>
      {/* Project Item ---------- */}
      <div className="project project-two">
        <a href="https://travisfrazier.github.io/matchgame/" target="_blank">
          <img src={require('../../images/projects/guess.png')} />
          <div className="project-inner">
            <div className="project-info">
              <h3>Vanilla JS Match Game</h3>
              <p>
                Developed this match game application. Built with: Vanilla
                JavaScript, Bootstrap 4, and custom CSS.
              </p>
              <span>View Site</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
)
