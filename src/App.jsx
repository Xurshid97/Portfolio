import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Showcase from './components/showcase/Showcase'
import Media from './components/media/Media'
import Quote from './components/quote/Quote'
import Title from './components/title/Title'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Media />
      <Header />
      <Showcase />
      <Quote />
      <Projects>
          <Title titleName='projects'/>
      </Projects>
      <Skills>
          <Title titleName='skills'/>
      </Skills>
      <About>
          <Title titleName='about-me'/>
      </About>
      <Contacts>
          <Title titleName='contacts'/>
      </Contacts>
      <hr />
      <Footer />
    </>
  )
}

export default App
