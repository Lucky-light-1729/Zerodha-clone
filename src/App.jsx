import React from 'react'
import './App.css
import NavbarLink from './NavbarLink'
import FooterLink from './FooterLink'
import  ScrollToTop from './ScrollToTop'

function App() {

  return (
    <div>
      <ScrollToTop />
      <NavbarLink/>
      <FooterLink/> 
    </div>
  )
}

export default App
