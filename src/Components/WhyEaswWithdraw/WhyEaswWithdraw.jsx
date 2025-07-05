// import React, { useState, useEffect, useRef } from 'react';

// const WhyEaseWithdraw = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative min-h-screen overflow-hidden"
//       style={{ backgroundColor: 'rgb(245,236,255)' }}
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-8">
//         <div 
//           className={`absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-200/40 to-purple-300/30 rounded-full blur-xl transform transition-all duration-1500 ${
//             isVisible 
//               ? 'scale-100 opacity-100' 
//               : 'scale-0 opacity-0'
//           }`}
//           style={{ transitionDelay: '0.3s' }}
//         ></div>
//         <div 
//           className={`absolute top-40 right-32 w-48 h-48 bg-gradient-to-br from-purple-300/30 to-purple-400/20 rounded-full blur-xl transform transition-all duration-1500 ${
//             isVisible 
//               ? 'scale-100 opacity-100' 
//               : 'scale-0 opacity-0'
//           }`}
//           style={{ transitionDelay: '0.6s' }}
//         ></div>
//         <div 
//           className={`absolute bottom-32 left-1/3 w-56 h-56 bg-gradient-to-br from-purple-400/20 to-purple-500/15 rounded-full blur-xl transform transition-all duration-1500 ${
//             isVisible 
//               ? 'scale-100 opacity-100' 
//               : 'scale-0 opacity-0'
//           }`}
//           style={{ transitionDelay: '0.9s' }}
//         ></div>
//       </div>

//       {/* Floating Orbs */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div 
//           className={`absolute top-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full transform transition-all duration-1000 ${
//             isVisible ? 'opacity-60' : 'opacity-0'
//           }`}
//           style={{ 
//             transitionDelay: '1.2s',
//             animation: isVisible ? 'float 6s ease-in-out infinite' : 'none'
//           }}
//         ></div>
//         <div 
//           className={`absolute top-1/3 right-1/4 w-2 h-2 bg-purple-500 rounded-full transform transition-all duration-1000 ${
//             isVisible ? 'opacity-50' : 'opacity-0'
//           }`}
//           style={{ 
//             transitionDelay: '1.4s',
//             animation: isVisible ? 'float 4s ease-in-out infinite 0.5s' : 'none'
//           }}
//         ></div>
//         <div 
//           className={`absolute bottom-1/3 left-1/3 w-4 h-4 bg-purple-300 rounded-full transform transition-all duration-1000 ${
//             isVisible ? 'opacity-40' : 'opacity-0'
//           }`}
//           style={{ 
//             transitionDelay: '1.6s',
//             animation: isVisible ? 'float 8s ease-in-out infinite 1s' : 'none'
//           }}
//         ></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 lg:px-16 xl:px-24 py-20">
        
//         {/* Section Label */}
//         <div 
//           className={`inline-block px-8 py-4 bg-white/70 backdrop-blur-md rounded-full border border-purple-200/50 mb-12 shadow-lg shadow-purple-500/10 transform transition-all duration-700 ${
//             isVisible 
//               ? 'translate-y-0 opacity-100 scale-100' 
//               : 'translate-y-10 opacity-0 scale-95'
//           }`}
//           style={{ transitionDelay: '0.2s' }}
//         >
//           <span className="text-lg font-bold text-purple-600 uppercase tracking-wider">WHY EASEWITHDRAW?</span>
//         </div>

//         {/* Main Content Container */}
//         <div className="max-w-4xl text-center">
          
//           {/* Main Headline */}
//           <h1 
//             className={`text-6xl lg:text-7xl xl:text-8xl font-bold mb-12 leading-tight transform transition-all duration-1000 ${
//               isVisible 
//                 ? 'translate-y-0 opacity-100' 
//                 : 'translate-y-20 opacity-0'
//             }`}
//             style={{ transitionDelay: '0.4s' }}
//           >
//             <span className="text-gray-800">Your </span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800">
//               Crypto
//             </span>
//             <span className="text-gray-800">, Your </span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
//               Power
//             </span>
//           </h1>

//           {/* Intro Text */}
//           <div 
//             className={`max-w-3xl mx-auto mb-16 transform transition-all duration-1000 ${
//               isVisible 
//                 ? 'translate-y-0 opacity-100' 
//                 : 'translate-y-20 opacity-0'
//             }`}
//             style={{ transitionDelay: '0.6s' }}
//           >
//             <p className="text-2xl lg:text-3xl text-gray-700 leading-relaxed font-light">
//               Why let your credit score hold you back? At EaseWithdraw, we approve loans and credit lines using your crypto as collateral — not your credit history.
//             </p>
//           </div>

//           {/* Call-to-Action */}
//           <div 
//             className={`transform transition-all duration-1000 ${
//               isVisible 
//                 ? 'translate-y-0 opacity-100 scale-100' 
//                 : 'translate-y-20 opacity-0 scale-95'
//             }`}
//             style={{ transitionDelay: '0.8s' }}
//           >
//             <button className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 text-white font-bold px-12 py-6 rounded-2xl text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 relative overflow-hidden group">
//               <span className="relative z-10">Get Started Today</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//             </button>
//           </div>

//         </div>

//         {/* Decorative Elements */}
//         <div className="absolute inset-0 pointer-events-none">
//           {/* Left side decoration */}
//           <div 
//             className={`absolute left-8 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-purple-400 to-transparent transform transition-all duration-1000 ${
//               isVisible 
//                 ? 'opacity-60 scale-y-100' 
//                 : 'opacity-0 scale-y-0'
//             }`}
//             style={{ transitionDelay: '1s' }}
//           ></div>
          
//           {/* Right side decoration */}
//           <div 
//             className={`absolute right-8 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-purple-400 to-transparent transform transition-all duration-1000 ${
//               isVisible 
//                 ? 'opacity-60 scale-y-100' 
//                 : 'opacity-0 scale-y-0'
//             }`}
//             style={{ transitionDelay: '1.2s' }}
//           ></div>
          
//           {/* Bottom decoration */}
//           <div 
//             className={`absolute bottom-16 left-1/2 -translate-x-1/2 h-1 w-32 bg-gradient-to-r from-transparent via-purple-400 to-transparent transform transition-all duration-1000 ${
//               isVisible 
//                 ? 'opacity-60 scale-x-100' 
//                 : 'opacity-0 scale-x-0'
//             }`}
//             style={{ transitionDelay: '1.4s' }}
//           ></div>
//         </div>

//       </div>

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { 
//             transform: translateY(0px) scale(1); 
//             opacity: 0.6;
//           }
//           50% { 
//             transform: translateY(-20px) scale(1.1); 
//             opacity: 0.8;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default WhyEaseWithdraw;


import React, { useState, useEffect, useRef } from 'react';

const WhyEaseWithdraw = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: '🎯', title: 'No Credit Score Needed', description: 'Your crypto is your credit' },
    { icon: '⚡', title: 'Approval in Minutes', description: 'Fast automated processing' },
    { icon: '🏧', title: 'Withdraw from Any U.S. ATM', description: 'Access cash anywhere' },
    { icon: '💰', title: 'Earn 2% Cashback', description: 'Rewards on every transaction' },
    { icon: '📊', title: 'Up to 3 Credit Lines per Profile', description: 'Multiple funding options' },
    { icon: '🛡️', title: 'Insurance Coverage', description: 'Protected credit lines & loans' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-auto overflow-hidden"
      style={{ backgroundColor: 'rgb(245,236,255)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div 
          className={`absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-200/40 to-purple-300/30 rounded-full blur-xl transform transition-all duration-1500 ${
            isVisible 
              ? 'scale-100 opacity-100' 
              : 'scale-0 opacity-0'
          }`}
          style={{ transitionDelay: '0.3s' }}
        ></div>
        <div 
          className={`absolute top-40 right-32 w-48 h-48 bg-gradient-to-br from-purple-300/30 to-purple-400/20 rounded-full blur-xl transform transition-all duration-1500 ${
            isVisible 
              ? 'scale-100 opacity-100' 
              : 'scale-0 opacity-0'
          }`}
          style={{ transitionDelay: '0.6s' }}
        ></div>
        <div 
          className={`absolute bottom-32 left-1/3 w-56 h-56 bg-gradient-to-br from-purple-400/20 to-purple-500/15 rounded-full blur-xl transform transition-all duration-1500 ${
            isVisible 
              ? 'scale-100 opacity-100' 
              : 'scale-0 opacity-0'
          }`}
          style={{ transitionDelay: '0.9s' }}
        ></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className={`absolute top-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full transform transition-all duration-1000 ${
            isVisible ? 'opacity-60' : 'opacity-0'
          }`}
          style={{ 
            transitionDelay: '1.2s',
            animation: isVisible ? 'float 6s ease-in-out infinite' : 'none'
          }}
        ></div>
        <div 
          className={`absolute top-1/3 right-1/4 w-2 h-2 bg-purple-500 rounded-full transform transition-all duration-1000 ${
            isVisible ? 'opacity-50' : 'opacity-0'
          }`}
          style={{ 
            transitionDelay: '1.4s',
            animation: isVisible ? 'float 4s ease-in-out infinite 0.5s' : 'none'
          }}
        ></div>
        <div 
          className={`absolute bottom-1/3 left-1/3 w-4 h-4 bg-purple-300 rounded-full transform transition-all duration-1000 ${
            isVisible ? 'opacity-40' : 'opacity-0'
          }`}
          style={{ 
            transitionDelay: '1.6s',
            animation: isVisible ? 'float 8s ease-in-out infinite 1s' : 'none'
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 lg:px-16 xl:px-24 py-20">
        
        {/* Section Label */}
        <div 
          className={`inline-block px-8 py-4 bg-white/70 backdrop-blur-md rounded-full border border-purple-200/50 mb-12 shadow-lg shadow-purple-500/10 transform transition-all duration-700 ${
            isVisible 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-10 opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <span className="text-lg font-bold text-purple-600 uppercase tracking-wider">WHY EASEWITHDRAW?</span>
        </div>

        {/* Main Content Container */}
        <div className="max-w-6xl text-center">
          
          {/* Main Headline */}
          <h1 
            className={`text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight transform transition-all duration-1000 ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <span className="text-gray-800">Your </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800">
              Crypto
            </span>
            <span className="text-gray-800">, Your </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700">
              Power
            </span>
          </h1>

          {/* Intro Text */}
          <div 
            className={`max-w-4xl mx-auto mb-20 transform transition-all duration-1000 ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
              Why let your credit score hold you back? At EaseWithdraw, we approve loans and credit lines using your crypto as collateral — not your credit history.
            </p>
          </div>

          {/* Key Benefits Section */}
          <div className="mb-16">
            {/* Key Benefits Heading */}
            <div 
              className={`text-center mb-12 transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">Benefits</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-800 mx-auto rounded-full"></div>
            </div>

            {/* Key Benefits Grid */}
            <div 
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: '1s' }}
            >
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`group relative bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-purple-200/50 shadow-lg shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${1.2 + index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-800/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-500">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-300/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-300/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

          {/* Call-to-Action */}
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-20 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '1.8s' }}
          >
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600 font-medium">
                Ready to unlock your crypto's potential?
              </p>
            </div>
            <button className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 text-white font-bold px-12 py-6 rounded-3xl text-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 relative overflow-hidden group">
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Left side decoration */}
          <div 
            className={`absolute left-8 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-purple-400 to-transparent transform transition-all duration-1000 ${
              isVisible 
                ? 'opacity-60 scale-y-100' 
                : 'opacity-0 scale-y-0'
            }`}
            style={{ transitionDelay: '1.8s' }}
          ></div>
          
          {/* Right side decoration */}
          <div 
            className={`absolute right-8 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-purple-400 to-transparent transform transition-all duration-1000 ${
              isVisible 
                ? 'opacity-60 scale-y-100' 
                : 'opacity-0 scale-y-0'
            }`}
            style={{ transitionDelay: '2s' }}
          ></div>
          
          {/* Bottom decoration */}
          <div 
            className={`absolute bottom-16 left-1/2 -translate-x-1/2 h-1 w-32 bg-gradient-to-r from-transparent via-purple-400 to-transparent transform transition-all duration-1000 ${
              isVisible 
                ? 'opacity-60 scale-x-100' 
                : 'opacity-0 scale-x-0'
            }`}
            style={{ transitionDelay: '2.2s' }}
          ></div>
        </div>

      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-20px) scale(1.1); 
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyEaseWithdraw;