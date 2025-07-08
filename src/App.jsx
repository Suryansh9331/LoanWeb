import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroWithNavbar from  "./Components/Navbar/navbar"
import Footer from  "./Components/Footer/Footer"
import FinancePopupForm from  "./Components/Form/PopUpForm"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/privacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
// import AboutUsFooter from "./pages/AboutUS"
import Navbar from "./Components/Navbar/navbar";

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <Router>
      <div>
        <ScrollToTop/>
        <HeroWithNavbar onTriggerPopup={openPopup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Terms-and-conditions" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* <Route path="/aboutus" element={<AboutUsFooter />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer onTriggerPopup={openPopup} />
        <FinancePopupForm isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </Router>
  );
};

export default App;
