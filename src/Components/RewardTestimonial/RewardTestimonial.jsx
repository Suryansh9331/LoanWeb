// import React, { useState, useEffect, useRef } from 'react';

// const RewardsTestimonials = () => {
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

//   const rewards = [
//     { icon: '💰', title: '2% Cashback', description: 'Every transaction (online or offline)' },
//     { icon: '🎁', title: 'Gift Coupons', description: 'Travel, food, shopping, and more' }
//   ];

//   const testimonials = [
//     {
//       quote: "With a 520 credit score, every bank said no. EaseWithdraw approved me for $2,000 in minutes. Crypto saved me.",
//       author: "James T.",
//       location: "Florida"
//     },
//     {
//       quote: "Zero credit history, zero worry. I got approved fast and started building my credit.",
//       author: "Maria K.",
//       location: "California"
//     }
//   ];

//   const trustFeatures = [
//     { icon: '🇺🇸', text: 'U.S. Based' },
//     { icon: '🔒', text: 'Crypto-Secured' },
//     { icon: '💎', text: 'Transparent Fees' },
//     { icon: '📞', text: '24/7 Customer Support' }
//   ];

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-30">
//         <div 
//           className={`absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-emerald-200/40 to-teal-300/30 rounded-full blur-3xl transform transition-all duration-2000 ${
//             isVisible 
//               ? 'scale-100 opacity-100' 
//               : 'scale-0 opacity-0'
//           }`}
//           style={{ transitionDelay: '0.2s' }}
//         ></div>
//         <div 
//           className={`absolute top-1/3 right-20 w-64 h-64 bg-gradient-to-br from-teal-300/30 to-cyan-400/25 rounded-full blur-2xl transform transition-all duration-2000 ${
//             isVisible 
//               ? 'scale-100 opacity-100' 
//               : 'scale-0 opacity-0'
//           }`}
//           style={{ transitionDelay: '0.5s' }}
//         ></div>
//         <div 
//           className={`absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-emerald-500/15 rounded-full blur-2xl transform transition-all duration-2000 ${
//             isVisible 
//               ? 'scale-100 opacity-100' 
//               : 'scale-0 opacity-0'
//           }`}
//           style={{ transitionDelay: '0.8s' }}
//         ></div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div 
//           className={`absolute top-1/4 left-1/5 w-4 h-4 bg-emerald-400 rounded-full transform transition-all duration-1000 ${
//             isVisible ? 'opacity-60' : 'opacity-0'
//           }`}
//           style={{ 
//             transitionDelay: '1.2s',
//             animation: isVisible ? 'float 6s ease-in-out infinite' : 'none'
//           }}
//         ></div>
//         <div 
//           className={`absolute top-1/2 right-1/4 w-3 h-3 bg-teal-500 rounded-full transform transition-all duration-1000 ${
//             isVisible ? 'opacity-50' : 'opacity-0'
//           }`}
//           style={{ 
//             transitionDelay: '1.4s',
//             animation: isVisible ? 'float 5s ease-in-out infinite 0.8s' : 'none'
//           }}
//         ></div>
//         <div 
//           className={`absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform transition-all duration-1000 ${
//             isVisible ? 'opacity-40' : 'opacity-0'
//           }`}
//           style={{ 
//             transitionDelay: '1.6s',
//             animation: isVisible ? 'float 7s ease-in-out infinite 1.2s' : 'none'
//           }}
//         ></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
//         <div className="max-w-7xl mx-auto">
          
//           {/* Rewards Section */}
//           <div className="mb-16 lg:mb-24">
//             {/* Rewards Heading */}
//             <div 
//               className={`text-center mb-12 transform transition-all duration-1000 ${
//                 isVisible 
//                   ? 'translate-y-0 opacity-100' 
//                   : 'translate-y-10 opacity-0'
//               }`}
//               style={{ transitionDelay: '0.3s' }}
//             >
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
//                   REWARDS
//                 </span>
//                 <span className="text-gray-800"> THAT WORK FOR YOU</span>
//               </h1>
//               <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
//             </div>

//             {/* Rewards Subtitle */}
//             <div 
//               className={`text-center mb-12 transform transition-all duration-1000 ${
//                 isVisible 
//                   ? 'translate-y-0 opacity-100' 
//                   : 'translate-y-10 opacity-0'
//               }`}
//               style={{ transitionDelay: '0.5s' }}
//             >
//               <p className="text-xl lg:text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
//                 Enjoy exclusive perks just for using your card:
//               </p>
//             </div>

//             {/* Rewards Grid */}
//             <div 
//               className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto transform transition-all duration-1000 ${
//                 isVisible 
//                   ? 'translate-y-0 opacity-100' 
//                   : 'translate-y-10 opacity-0'
//               }`}
//               style={{ transitionDelay: '0.7s' }}
//             >
//               {rewards.map((reward, index) => (
//                 <div 
//                   key={index}
//                   className={`group relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-emerald-200/50 shadow-lg shadow-emerald-500/10 hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 ${
//                     isVisible 
//                       ? 'translate-y-0 opacity-100' 
//                       : 'translate-y-10 opacity-0'
//                   }`}
//                   style={{ transitionDelay: `${0.9 + index * 0.1}s` }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
//                   <div className="relative z-10 text-center">
//                     <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
//                       {reward.icon}
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-emerald-700 transition-colors duration-500">
//                       {reward.title}
//                     </h3>
//                     <p className="text-gray-600 text-lg leading-relaxed">
//                       {reward.description}
//                     </p>
//                   </div>
                  
//                   <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-emerald-300/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-emerald-300/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Divider */}
//           <div 
//             className={`flex justify-center mb-16 lg:mb-24 transform transition-all duration-1000 ${
//               isVisible 
//                 ? 'translate-y-0 opacity-100' 
//                 : 'translate-y-10 opacity-0'
//             }`}
//             style={{ transitionDelay: '1.1s' }}
//           >
//             <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
//           </div>

//           {/* Testimonials Section */}
//           <div className="mb-16 lg:mb-24">
//             {/* Testimonials Heading */}
//             <div 
//               className={`text-center mb-12 transform transition-all duration-1000 ${
//                 isVisible 
//                   ? 'translate-y-0 opacity-100' 
//                   : 'translate-y-10 opacity-0'
//               }`}
//               style={{ transitionDelay: '1.3s' }}
//             >
//               <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
//                   REAL STORIES
//                 </span>
//                 <span className="text-gray-800"> FROM REAL CLIENTS</span>
//               </h2>
//               <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto rounded-full"></div>
//             </div>

//             {/* Testimonials Grid */}
//             <div 
//               className={`grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto transform transition-all duration-1000 ${
//                 isVisible 
//                   ? 'translate-y-0 opacity-100' 
//                   : 'translate-y-10 opacity-0'
//               }`}
//               style={{ transitionDelay: '1.5s' }}
//             >
//               {testimonials.map((testimonial, index) => (
//                 <div 
//                   key={index}
//                   className={`group relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-teal-200/50 shadow-lg shadow-teal-500/10 hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-700 transform hover:scale-102 hover:-translate-y-1 ${
//                     isVisible 
//                       ? 'translate-y-0 opacity-100' 
//                       : 'translate-y-10 opacity-0'
//                   }`}
//                   style={{ transitionDelay: `${1.7 + index * 0.2}s` }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-cyan-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
//                   <div className="relative z-10">
//                     <div className="text-6xl text-teal-300 mb-4 leading-none">"</div>
//                     <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
//                       {testimonial.quote}
//                     </p>
//                     <div className="flex items-center">
//                       <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
//                         <span className="text-white font-bold text-lg">
//                           {testimonial.author.charAt(0)}
//                         </span>
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-800 text-lg">
//                           {testimonial.author}
//                         </p>
//                         <p className="text-gray-600">
//                           {testimonial.location}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Trust Section */}
//           <div 
//             className={`text-center transform transition-all duration-1000 ${
//               isVisible 
//                 ? 'translate-y-0 opacity-100' 
//                 : 'translate-y-10 opacity-0'
//             }`}
//             style={{ transitionDelay: '2.1s' }}
//           >
//             <h3 className="text-3xl font-bold text-gray-800 mb-8">
//               Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">U.S. Clients Nationwide</span>
//             </h3>
            
//             <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
//               {trustFeatures.map((feature, index) => (
//                 <div 
//                   key={index}
//                   className={`flex items-center space-x-3 bg-white/70 backdrop-blur-md rounded-2xl px-6 py-4 border border-cyan-200/50 shadow-lg shadow-cyan-500/10 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 ${
//                     isVisible 
//                       ? 'translate-y-0 opacity-100' 
//                       : 'translate-y-10 opacity-0'
//                   }`}
//                   style={{ transitionDelay: `${2.3 + index * 0.1}s` }}
//                 >
//                   <span className="text-2xl">{feature.icon}</span>
//                   <span className="text-gray-700 font-semibold text-lg">
//                     {feature.text}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

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
//             transform: translateY(-15px) scale(1.05); 
//             opacity: 0.8;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default RewardsTestimonials;
import React, { useState, useEffect, useRef } from 'react';

const RewardsTestimonialsSection = () => {
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

  const rewards = [
    { icon: '💰', title: '2% cashback on every transaction', description: '(online or offline)' },
    { icon: '🎁', title: 'Get gift coupons for travel, food, shopping, and more', description: 'Exclusive perks just for you' }
  ];

  const testimonials = [
    {
      quote: "With a 520 credit score, every bank said no. EaseWithdraw approved me for $2,000 in minutes. Crypto saved me.",
      author: "James T.",
      location: "Florida"
    },
    {
      quote: "Zero credit history, zero worry. I got approved fast and started building my credit.",
      author: "Maria K.",
      location: "California"
    }
  ];

  const trustFeatures = [
    { icon: '🇺🇸', text: 'U.S. Based' },
    { icon: '🔒', text: 'Crypto-Secured' },
    { icon: '💎', text: 'Transparent Fees' },
    { icon: '📞', text: '24/7 Customer Support' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: 'rgb(246,238,255)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className={`absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-purple-200/40 to-purple-300/30 rounded-full blur-3xl transform transition-all duration-2000 ${
            isVisible 
              ? 'scale-100 opacity-100' 
              : 'scale-0 opacity-0'
          }`}
          style={{ transitionDelay: '0.2s' }}
        ></div>
        <div 
          className={`absolute top-1/3 right-20 w-64 h-64 bg-gradient-to-br from-purple-300/30 to-purple-400/25 rounded-full blur-2xl transform transition-all duration-2000 ${
            isVisible 
              ? 'scale-100 opacity-100' 
              : 'scale-0 opacity-0'
          }`}
          style={{ transitionDelay: '0.5s' }}
        ></div>
        <div 
          className={`absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-purple-500/15 rounded-full blur-2xl transform transition-all duration-2000 ${
            isVisible 
              ? 'scale-100 opacity-100' 
              : 'scale-0 opacity-0'
          }`}
          style={{ transitionDelay: '0.8s' }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className={`absolute top-1/4 left-1/5 w-4 h-4 bg-purple-400 rounded-full transform transition-all duration-1000 ${
            isVisible ? 'opacity-60' : 'opacity-0'
          }`}
          style={{ 
            transitionDelay: '1.2s',
            animation: isVisible ? 'float 6s ease-in-out infinite' : 'none'
          }}
        ></div>
        <div 
          className={`absolute top-1/2 right-1/4 w-3 h-3 bg-purple-500 rounded-full transform transition-all duration-1000 ${
            isVisible ? 'opacity-50' : 'opacity-0'
          }`}
          style={{ 
            transitionDelay: '1.4s',
            animation: isVisible ? 'float 5s ease-in-out infinite 0.8s' : 'none'
          }}
        ></div>
        <div 
          className={`absolute bottom-1/3 left-1/2 w-2 h-2 bg-purple-300 rounded-full transform transition-all duration-1000 ${
            isVisible ? 'opacity-40' : 'opacity-0'
          }`}
          style={{ 
            transitionDelay: '1.6s',
            animation: isVisible ? 'float 7s ease-in-out infinite 1.2s' : 'none'
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Rewards Section */}
          <div className="mb-16 lg:mb-24">
            {/* Rewards Heading */}
            <div 
              className={`text-center mb-12 transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800">
                  REWARDS THAT WORK FOR YOU
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-800 mx-auto rounded-full"></div>
            </div>

            {/* Rewards Subtitle */}
            <div 
              className={`text-center mb-12 transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              <p className="text-xl lg:text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
                Enjoy exclusive perks just for using your card:
              </p>
            </div>

            {/* Rewards List */}
            <div 
              className={`max-w-4xl mx-auto mb-12 transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.7s' }}
            >
              <div className="space-y-8">
                {rewards.map((reward, index) => (
                  <div 
                    key={index}
                    className={`group relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-purple-200/50 shadow-lg shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 transform hover:scale-102 hover:-translate-y-1 ${
                      isVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${0.9 + index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-800/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 flex items-center space-x-6">
                      <div className="text-5xl transform group-hover:scale-110 transition-transform duration-500">
                        {reward.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors duration-500">
                          {reward.title}
                        </h3>
                        <p className="text-gray-600 text-lg">
                          {reward.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-300/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-300/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div 
            className={`flex justify-center mb-16 lg:mb-24 transform transition-all duration-1000 ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '1.1s' }}
          >
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16 lg:mb-24">
            {/* Testimonials Heading */}
            <div 
              className={`text-center mb-12 transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '1.3s' }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800">
                  REAL STORIES FROM REAL CLIENTS
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-800 mx-auto rounded-full"></div>
            </div>

            {/* Testimonials Grid */}
            <div 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '1.5s' }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`group relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-purple-200/50 shadow-lg shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 transform hover:scale-102 hover:-translate-y-1 ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${1.7 + index * 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-800/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl text-purple-300 mb-4 leading-none">"</div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-lg">
                          {testimonial.author}
                        </p>
                        <p className="text-gray-600">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Section */}
          <div 
            className={`text-center transform transition-all duration-1000 ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '2.1s' }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">U.S. Clients Nationwide</span>
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
              {trustFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex flex-col items-center space-y-3 bg-white/70 backdrop-blur-md rounded-2xl px-4 py-6 border border-purple-200/50 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105 ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${2.3 + index * 0.1}s` }}
                >
                  <span className="text-3xl">{feature.icon}</span>
                  <span className="text-gray-700 font-semibold text-center text-sm lg:text-base">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

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
            transform: translateY(-15px) scale(1.05); 
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
};

export default RewardsTestimonialsSection;