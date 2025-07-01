import React from 'react'
import './App.css'
import Navbar from "./Navbar";
import Policies from "./Component/Policies";
import Disclousure from './Component/Disclousure';
import Charges from "./Component/Charges";
import Market from "./Component/Market-holiday";
import Investor from "./Component/Investor";

function App() {

  return (
    <div>
   <Navbar />
   {/* <Policies /> */}
   {/* <Disclousure /> */}
   {/* <Charges /> */}
   {/* <Market /> */}
   <Investor />
    </div>
  )
}

export default App
