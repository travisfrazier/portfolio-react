import React from 'react'
import './_header.scss'
import '../../../fonts/fontawesome/css/font-awesome.css'
import Link from 'gatsby-link'

export class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false,
    }
  }

  toggleMenu = () => {
    this.setState(prevState => {
      return {
        showMenu: !prevState.showMenu,
      }
    })
  }

  render() {
    return (
      <header className="header">
        <figure className="mobile-menu">
          <img
            onClick={this.toggleMenu}
            className="button"
            src={require('../../images/menu.png')}
          />
        </figure>
        <nav className={this.state.showMenu ? 'block' : ''}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="https://represent.io/travisfrazier" target="_blank">
                Resumé
              </a>
            </li>
          </ul>
        </nav>
        <div className="layer" />
        <p>Hello, My name is Travis Frazier and</p>
        <h1>
          <strong>I'M A FRONT-END WEB DEVELOPER</strong>
        </h1>
        <p>creating modern and responsive design for web and mobile.</p>
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
        <a className="arrow-container">
          <i className="fa fa-angle-double-down arrow" />
        </a>
      </header>
    )
  }
}
