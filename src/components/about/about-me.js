import React from 'react'
import './_about.scss'

export const AboutMe = () => (
  <section className="about-me" id="about">
    <div>
      <h2>About Me</h2>
    </div>
    <div className="about-content">
      <img src={require('../../images/me.jpg')} />
      <div className="about-description">
        <p>
          I am <ins>Travis Frazier</ins>. Front-end Developer. Musician.
          Traveler. Hardcore adventurer. Devoted husband. Pretend Marine
          Biologist.
        </p>
        <p>
          I am passionate about creating modern design for web and mobile. My
          strengths include HTML5, SASS, and JavaScript. I also enjoy the
          challenge of writing my own CSS without the use of Bootstrap and I am
          very comfortable manipulating the DOM with vanilla JavaScript.
        </p>
        <p>
          Continual education and being relevant on new trends are both very
          important to me and currently I'm focusing on ReactJS. It's not
          uncommon to find me coding through the weekends or on the road. Check
          out my latest projects below or view more on my{' '}
          <u>
            <a href="https://github.com/travisfrazier" target="_blank">
              GitHub.
            </a>
          </u>{' '}
          I am eager to apply my experience and skills to better your company or
          project!
        </p>
        <a href="#contact">
          <button>Contact Me</button>
        </a>
      </div>
    </div>
  </section>
)
