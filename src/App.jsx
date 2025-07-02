import React from 'react';
import Navbar from './Navbar';
import FooterLink from './FooterLink';
import ScrollToTop from './ScrollToTop';
import HolidayCalendar from './Component/Market-holiday';
import InvestoreCharter from './Component/InvestoreCharter'; // make sure file name matches

function App() {
  return (
    <>
      <Navbar />
      <InvestoreCharter />
      {/* Add more components here */}
    </>
  );
}

export default App;




