import React from 'react'
import './App.css'
import Navbar from './Navbar'
import FooterLink from './FooterLink'
import  ScrollToTop from './ScrollToTop'

function App() {

  return (
    <div>
      <ScrollToTop />
      <Navbar/>
      <FooterLink/> 
    </div>
  )
}

export default App
