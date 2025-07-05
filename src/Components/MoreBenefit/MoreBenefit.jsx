import React, { useState, useEffect, useRef } from 'react';

const MoreBenefitsSection = () => {
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
    { 
      icon: '🏪', 
      title: 'Use your card anywhere in the U.S. — online or in-store', 
      description: 'Complete freedom and flexibility for all your purchases' 
    },
    { 
      icon: '💳', 
      title: 'Withdraw cash at any ATM', 
      description: 'Access your money whenever you need it, anywhere' 
    },
    { 
      icon: '⚡', 
      title: 'Cancel anytime with fast settlement', 
      description: 'No long-term commitments, complete control over your account' 
    },
    { 
      icon: '📈', 
      title: 'Build credit as you spend', 
      description: 'Every purchase helps improve your credit score automatically' 
    }
  ];

 

 
  return (
    <section 
      ref={sectionRef}
      className="relative min-h-auto overflow-hidden"
      style={{ backgroundColor: '#182232' }}
    >
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-30">
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
      </div> */}

      {/* Floating Elements */}
     

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Benefits Section */}
          <div className="mb-16 lg:mb-24">
            {/* Main Heading */}
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
                  MORE BENEFITS
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-800 mx-auto rounded-full"></div>
            </div>

            {/* Benefits Subtitle */}
            <div 
              className={`text-center mb-12 transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              <p className="text-xl lg:text-2xl text-white font-medium max-w-3xl mx-auto">
                Experience complete financial freedom with these powerful features:
              </p>
            </div>

            {/* Benefits Grid */}
            <div 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12 transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '0.7s' }}
            >
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`group relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-purple-200/50 shadow-lg shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 transform hover:scale-102 hover:-translate-y-1 ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${0.9 + index * 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-800/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex items-start space-x-6">
                    <div className="text-5xl transform group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-500 leading-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-300/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-300/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div 
            className={`flex justify-center mb-10 lg:mb-14 transform transition-all duration-1000 ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '1.7s' }}
          >
            <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Highlights Section */}
         

          {/* Additional Features */}
         
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

export default MoreBenefitsSection;