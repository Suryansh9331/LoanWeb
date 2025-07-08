// src/App.jsx

import React, { useState } from 'react';

// import HeroWithNavbar from  "../Components/Navbar/navbar"
import WhyEaseWithdraw from "../Components/WhyEaswWithdraw/WhyEaswWithdraw"
import RewardsTestimonials from "../Components/RewardTestimonial/RewardTestimonial"
import HowItWorks from "../Components/HowItWorks/HowItWorks"
import MoreBenefitsSection from "../Components/MoreBenefit/MoreBenefit"
import FAQ from "../Components/FAQ/FAQ"
import GetStart from "../Components/GetStart/GetStart"
// import Footer from '../Components/Footer/Footer';
import FinancePopupForm  from "../Components/Form/PopUpForm"
function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div  >
      {/* <Navbar/>
      <Hero/> */}
      {/* <HeroWithNavbar onTriggerPopup={openPopup}/> */}
      <WhyEaseWithdraw onTriggerPopup={openPopup}/>
      <RewardsTestimonials onTriggerPopup={openPopup}/>
      <HowItWorks onTriggerPopup={openPopup}/>
      <MoreBenefitsSection onTriggerPopup={openPopup}/>
      <FAQ onTriggerPopup={openPopup}/>
      <GetStart onTriggerPopup={openPopup}/>
      {/* <Footer onTriggerPopup={openPopup}/> */}
       <FinancePopupForm isOpen={isPopupOpen} onClose={closePopup}/> 
    </div>
  );
}

export default Home;
