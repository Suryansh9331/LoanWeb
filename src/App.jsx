// src/App.jsx

import React from 'react';
import Navbar from './Components/Navbar/navbar';
import Hero from './Components/HeroBanner/Hero';
import HeroWithNavbar from  "./Components/Navbar/navbar"
import WhyEaseWithdraw from "./Components/WhyEaswWithdraw/WhyEaswWithdraw"
import RewardsTestimonials from "./Components/RewardTestimonial/RewardTestimonial"
function App() {
  return (
    <div  >
      {/* <Navbar/>
      <Hero/> */}
      <HeroWithNavbar/>
      <WhyEaseWithdraw/>
      <RewardsTestimonials/>
    </div>
  );
}

export default App;
