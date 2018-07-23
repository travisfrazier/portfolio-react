import React from 'react'
import { Header } from '../components/header/header'
import { AboutMe } from '../components/about/about-me'
import { Projects } from '../components/projects/projects'
import { Contact } from '../components/contact/contact'
import { Footer } from '../components/footer/footer'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <Header />
    <AboutMe />
    <Projects />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
