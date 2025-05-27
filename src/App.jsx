import React from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Cards from "./components/Cards"


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Section/>
      <Main />
      <Cards />
      <Footer />
    </>
  );
}

export default App