// src/App.jsx

import React from 'react';
import Navbar from './Components/Navbar/navbar';
import Hero from './Components/HeroBanner/Hero';
import HeroWithNavbar from  "./Components/Navbar/navbar"
import WhyEaseWithdraw from "./Components/WhyEaswWithdraw/WhyEaswWithdraw"
import RewardsTestimonials from "./Components/RewardTestimonial/RewardTestimonial"
import HowItWorks from "./Components/HowItWorks/HowItWorks"
import MoreBenefitsSection from "./Components/MoreBenefit/MoreBenefit"
import FAQ from "./Components/FAQ/FAQ"
import GetStart from "./Components/GetStart/GetStart"
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div  >
      {/* <Navbar/>
      <Hero/> */}
      <HeroWithNavbar/>
      <WhyEaseWithdraw/>
      <RewardsTestimonials/>
      <HowItWorks/>
      <MoreBenefitsSection/>
      <FAQ/>
      <GetStart/>
      <Footer/>
    </div>
  );
}

export default App;
