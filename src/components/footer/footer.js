import React from 'react'
import './_footer.scss'
import '../../../fonts/fontawesome/css/font-awesome.css'

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="social-links">
        <a href="https://www.instagram.com/travisf7/">
          <i className="fa fa-instagram" />
        </a>
        <a href="https://www.facebook.com/travisfrazier7">
          <i className="fa fa-facebook" />
        </a>
        <a href="https://github.com/travisfrazier">
          <i className="fa fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/travisf7/">
          <i className="fa fa-linkedin" />
        </a>
      </div>
      <p>Copyright © Travis Frazier 2018.</p>
    </div>
  </footer>
)
