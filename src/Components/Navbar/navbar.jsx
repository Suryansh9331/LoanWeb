// // import React, { useState, useEffect } from 'react';

// // const Navbar = () => {
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const scrolled = window.scrollY > 50;
// //       setIsScrolled(scrolled);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   return (
// //     <>
// //       {/* Navbar */}
// //       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
// //         isScrolled 
// //           ? 'bg-white/98 backdrop-blur-lg shadow-lg shadow-purple-500/8' 
// //           : 'bg-gradient-to-r from-purple-500/5 to-white/95 backdrop-blur-xl'
// //       }`}>
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className={`flex items-center justify-between transition-all duration-500 ease-out ${
// //             isScrolled ? 'h-16' : 'h-20'
// //           }`}>
            
// //             {/* Logo */}
// //             <div className="flex items-center group cursor-pointer">
// //               <div className={`bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-purple-500/40 ${
// //                 isScrolled ? 'w-10 h-10 text-lg' : 'w-12 h-12 text-xl'
// //               }`}>
// //                 E
// //               </div>
// //               <span className={`ml-3 font-bold text-gray-800 transition-all duration-300 ${
// //                 isScrolled ? 'text-xl' : 'text-2xl'
// //               }`}>
// //                 Easewithdraw
// //               </span>
// //             </div>

// //             {/* Navigation Buttons */}
// //             <div className="flex items-center space-x-3 sm:space-x-4">
// //               {/* Learn More Button */}
// //               <button className={`relative overflow-hidden bg-purple-600/10 text-purple-600 border-2 border-purple-600/20 rounded-full font-semibold transition-all duration-300 hover:bg-purple-600/15 hover:border-purple-600/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 group ${
// //                 isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-sm'
// //               } hidden sm:block`}>
// //                 <span className="relative z-10">Learn More</span>
// //                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
// //               </button>

// //               {/* Get Started Button */}
// //               <button className={`relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/40 group ${
// //                 isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-sm'
// //               }`}>
// //                 <span className="relative z-10">Get Started</span>
// //                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Demo Content for Scrolling */}
     
// //     </>
// //   );
// // };

// // export default Navbar;


// import React, { useState, useEffect } from 'react';

// const HeroWithNavbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Navbar */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
//           isScrolled
//             ? 'bg-white/98 backdrop-blur-lg shadow-lg shadow-purple-500/8'
//             : 'bg-gradient-to-r from-purple-500/5 to-white/95 backdrop-blur-xl'
//         }`}
//       >
//         <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
//           <div
//             className={`flex items-center justify-between transition-all duration-500 ease-out ${
//               isScrolled ? 'h-16' : 'h-20'
//             }`}
//           >
//             {/* Logo */}
//             <div className="flex items-center group cursor-pointer">
//               <div
//                 className={`bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-purple-500/40 ${
//                   isScrolled ? 'w-10 h-10 text-lg' : 'w-12 h-12 text-xl'
//                 }`}
//               >
//                 E
//               </div>
//               <span
//                 className={`ml-3 font-bold text-gray-800 transition-all duration-300 ${
//                   isScrolled ? 'text-xl' : 'text-2xl'
//                 }`}
//               >
//                 Easewithdraw
//               </span>
//             </div>

//             {/* Nav Buttons */}
//             <div className="flex items-center space-x-3 sm:space-x-4">
//               <button
//                 className={`relative overflow-hidden bg-purple-600/10 text-purple-600 border-2 border-purple-600/20 rounded-full font-semibold transition-all duration-300 hover:bg-purple-600/15 hover:border-purple-600/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 group ${
//                   isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-sm'
//                 } hidden sm:block`}
//               >
//                 <span className="relative z-10">Learn More</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//               </button>

//               <button
//                 className={`relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/40 group ${
//                   isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-sm'
//                 }`}
//               >
//                 <span className="relative z-10">Get Started</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden pt-24">
//         {/* Background pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-20 w-32 h-32 border border-gray-600 rounded-full"></div>
//           <div className="absolute top-40 right-32 w-20 h-20 border border-gray-600 rounded-full"></div>
//           <div className="absolute bottom-32 left-1/4 w-24 h-24 border border-gray-600 rounded-full"></div>
//         </div>

//         <div className="relative z-10  flex flex-col lg:flex-row items-center justify-between min-h-screen mt-10 px-8 lg:px-16 xl:px-24">
//           {/* Left Content */}
//           <div className="flex-1 max-w-2xl">
//             <div className="inline-block px-4 py-2 bg-gray-800 bg-opacity-50 rounded-full border border-gray-600 mb-6">
//               <span className="text-sm text-gray-300">Poor Credit? No Problem — EaseWithdraw Has You Covered</span>
//             </div>

//             <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//               Get Approved Even with{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
//                 Poor Credit
//               </span>{' '}
//               — Instantly.
//             </h1>

//             <p className="text-xl text-gray-300 mb-8 leading-relaxed">
//               At EaseWithdraw, your crypto is your credit—no credit check, no delay, just fast cash.
//             </p>

//             <div className="space-y-3 mb-10">
//               <div className="flex items-center text-gray-200">
//                 <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
//                 <span className="text-lg">Crypto-Backed Credit Line & Loans</span>
//               </div>
//               <div className="flex items-center text-gray-200">
//                 <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
//                 <span className="text-lg">Withdraw from Any U.S. ATM</span>
//               </div>
//               <div className="flex items-center text-gray-200">
//                 <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
//                 <span className="text-lg">2% Cashback on Every Transaction</span>
//               </div>
//             </div>

//             <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//               Apply Now – No Credit Check
//             </button>

//             {/* App Badges */}
//             <div className="flex items-center space-x-4 mt-12">
//               <div className="flex items-center space-x-2 text-gray-400">
//                 <span className="text-sm uppercase tracking-wide">Available on</span>
//               </div>
//               <div className="flex items-center space-x-2 bg-gray-800 bg-opacity-50 rounded-lg px-4 py-2 border border-gray-600">
//                 <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
//                 </svg>
//                 <span className="text-sm text-gray-300">Google Play</span>
//               </div>
//               <div className="flex items-center space-x-2 bg-gray-800 bg-opacity-50 rounded-lg px-4 py-2 border border-gray-600">
//                 <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
//                 </svg>
//                 <span className="text-sm text-gray-300">App Store</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0 ml-0 lg:ml-20">
//             <img
//               src="https://themewagon.github.io/Crypgo/images/hero/banner-image.png"
//               alt="Mobile phone and hands"
//               className="w-full max-w-md lg:max-w-2xl object-cover rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroWithNavbar;



import React, { useState, useEffect } from 'react';

const HeroWithNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out transform ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-lg shadow-lg shadow-purple-500/8'
            : 'bg-gradient-to-r from-white/90 to-white/95 backdrop-blur-xl'
        } ${
          isLoaded 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0'
        }`}
        style={{ 
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease-out' 
        }}
      >
        <div className="max-w-full mx-auto px-4 pl-6 sm:px-6 lg:px-8 ">
          <div
            className={`flex items-center justify-between transition-all duration-500 ease-out ${
              isScrolled ? 'h-16' : 'h-20'
            }`}
          >
            {/* Logo */}
            <div 
              className={`flex items-center group cursor-pointer transform transition-all duration-700 ${
                isLoaded 
                  ? 'translate-x-0 opacity-100' 
                  : '-translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div
                className={`bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-purple-500/40 ${
                  isScrolled ? 'w-10 h-10 text-lg' : 'w-12 h-12 text-xl'
                }`}
              >
                E
              </div>
              <span
                className={`ml-3 font-bold text-gray-800 transition-all duration-300 ${
                  isScrolled ? 'text-xl' : 'text-2xl'
                }`}
              >
                Easewithdraw
              </span>
            </div>

            {/* Nav Buttons */}
            <div 
              className={`flex items-center space-x-3 sm:space-x-4 transform transition-all duration-700 ${
                isLoaded 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <button
                className={`relative overflow-hidden bg-purple-600/10 text-purple-600 border-2 border-purple-600/20 rounded-full font-semibold transition-all duration-300 hover:bg-purple-600/15 hover:border-purple-600/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 group ${
                  isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-sm'
                } hidden sm:block`}
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>

              <button
                className={`relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/40 group ${
                  isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-sm'
                }`}
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden pt-24 pb-18">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className={`absolute top-20 left-20 w-32 h-32 border border-gray-600 rounded-full transform transition-all duration-1000 ${
              isLoaded 
                ? 'scale-100 opacity-100' 
                : 'scale-0 opacity-0'
            }`}
            style={{ transitionDelay: '0.8s' }}
          ></div>
          <div 
            className={`absolute top-40 right-32 w-20 h-20 border border-gray-600 rounded-full transform transition-all duration-1000 ${
              isLoaded 
                ? 'scale-100 opacity-100' 
                : 'scale-0 opacity-0'
            }`}
            style={{ transitionDelay: '1s' }}
          ></div>
          <div 
            className={`absolute bottom-32 left-1/4 w-24 h-24 border border-gray-600 rounded-full transform transition-all duration-1000 ${
              isLoaded 
                ? 'scale-100 opacity-100' 
                : 'scale-0 opacity-0'
            }`}
            style={{ transitionDelay: '1.2s' }}
          ></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen mt-10 px-8 lg:px-16 xl:px-24">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <div 
              className={`inline-block px-4 py-2 bg-gray-800 bg-opacity-50 rounded-full border border-gray-600 mb-6 transform transition-all duration-700 ${
                isLoaded 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <span className="text-sm text-gray-300">Poor Credit? No Problem — EaseWithdraw Has You Covered</span>
            </div>

            <h1 
              className={`text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transform transition-all duration-700 ${
                isLoaded 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              Get Approved Even with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Poor Credit
              </span>{' '}
              — Instantly.
            </h1>

            <p 
              className={`text-xl text-gray-300 mb-8 leading-relaxed transform transition-all duration-700 ${
                isLoaded 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              At EaseWithdraw, your crypto is your credit—no credit check, no delay, just fast cash.
            </p>

            <div 
              className={`space-y-3 mb-10 transform transition-all duration-700 ${
                isLoaded 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.7s' }}
            >
              <div 
                className={`flex items-center text-gray-200 transform transition-all duration-500 ${
                  isLoaded 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-5 opacity-0'
                }`}
                style={{ transitionDelay: '0.8s' }}
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-lg">Crypto-Backed Credit Line & Loans</span>
              </div>
              <div 
                className={`flex items-center text-gray-200 transform transition-all duration-500 ${
                  isLoaded 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-5 opacity-0'
                }`}
                style={{ transitionDelay: '0.9s' }}
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-lg">Withdraw from Any U.S. ATM</span>
              </div>
              <div 
                className={`flex items-center text-gray-200 transform transition-all duration-500 ${
                  isLoaded 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-5 opacity-0'
                }`}
                style={{ transitionDelay: '1s' }}
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-lg">2% Cashback on Every Transaction</span>
              </div>
            </div>

            <button 
              className={`bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-700 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isLoaded 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-10 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '1.1s' }}
            >
              Apply Now – No Credit Check
            </button>

            {/* App Badges */}
            <div 
              className={`flex items-center space-x-4 mt-12 transform transition-all duration-700 ${
                isLoaded 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '1.2s' }}
            >
              <div className="flex items-center space-x-2  text-gray-400">
                <span className="text-sm uppercase tracking-wide">Available on</span>
              </div>
              <div 
                className={`flex items-center space-x-2 bg-gray-800 bg-opacity-50 rounded-lg px-4 py-2 border border-gray-600 transform transition-all duration-500 hover:scale-105 ${
                  isLoaded 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-5 opacity-0'
                }`}
                style={{ transitionDelay: '1.3s' }}
              >
                <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span className="text-sm text-gray-300">Google Play</span>
              </div>
              <div 
                className={`flex items-center space-x-2 bg-gray-800 bg-opacity-50 rounded-lg px-4 py-2 border border-gray-600 transform transition-all duration-500 hover:scale-105 ${
                  isLoaded 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-5 opacity-0'
                }`}
                style={{ transitionDelay: '1.4s' }}
              >
                <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <span className="text-sm text-gray-300">App Store</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div 
            className={`flex-1 flex justify-center items-center mt-10 lg:mt-0 ml-0 lg:ml-20 transform transition-all duration-1000 ${
              isLoaded 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-10 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <div className="relative">
              <img
                src="https://themewagon.github.io/Crypgo/images/hero/banner-image.png"
                alt="Mobile phone and hands"
                className="w-full max-w-md lg:max-w-2xl object-cover rounded-lg transform transition-all duration-1000 hover:scale-105"
                style={{
                  filter: isLoaded ? 'blur(0px)' : 'blur(5px)',
                  transition: 'filter 0.8s ease-out'
                }}
              />
              {/* Floating animation effect */}
              <div 
                className={`absolute -top-4 -right-4 w-8 h-8 bg-purple-500/20 rounded-full transform transition-all duration-1000 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  transitionDelay: '1.5s',
                  animation: isLoaded ? 'float 3s ease-in-out infinite' : 'none'
                }}
              ></div>
              <div 
                className={`absolute -bottom-6 -left-6 w-12 h-12 bg-purple-400/15 rounded-full transform transition-all duration-1000 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  transitionDelay: '1.7s',
                  animation: isLoaded ? 'float 4s ease-in-out infinite 0.5s' : 'none'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </>
  );
};

export default HeroWithNavbar;