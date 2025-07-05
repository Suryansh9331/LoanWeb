import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-gray-600 rounded-full"></div>
        <div className="absolute top-40 right-32 w-20 h-20 border border-gray-600 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 border border-gray-600 rounded-full"></div>
      </div>
      
      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-between min-h-screen px-8 lg:px-16 xl:px-24">
        
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          {/* Logo/Brand */}
        

          {/* Top Section Tag */}
          <div className="inline-block px-4 py-2 bg-gray-800 bg-opacity-50 rounded-full border border-gray-600 mb-6">
            <span className="text-sm text-gray-300">Poor Credit? No Problem — EaseWithdraw Has You Covered</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Get Approved Even with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Poor Credit
            </span>{' '}
            — Instantly.
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            At EaseWithdraw, your crypto is your credit—no credit check, no delay, just fast cash.
          </p>

          {/* Features List */}
          <div className="space-y-3 mb-10">
            <div className="flex items-center text-gray-200">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
              <span className="text-lg">Crypto-Backed Credit Line & Loans</span>
            </div>
            <div className="flex items-center text-gray-200">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
              <span className="text-lg">Withdraw from Any U.S. ATM</span>
            </div>
            <div className="flex items-center text-gray-200">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
              <span className="text-lg">2% Cashback on Every Transaction</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Apply Now – No Credit Check
          </button>

          {/* App Store Badges */}
          <div className="flex items-center space-x-4 mt-12">
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="text-sm uppercase tracking-wide">Available on</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 bg-opacity-50 rounded-lg px-4 py-2 border border-gray-600">
              <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <span className="text-sm text-gray-300">Google Play</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 bg-opacity-50 rounded-lg px-4 py-2 border border-gray-600">
              <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
              </svg>
              <span className="text-sm text-gray-300">App Store</span>
            </div>
          </div>
        </div>

        {/* Right Content - Image Placeholder */}
        <div className="flex-1 flex justify-center items-center ml-18">
          <div className="relative ">
            {/* Simple Image Placeholder */}
            <img 
              src="https://themewagon.github.io/Crypgo/images/hero/banner-image.png" 
              alt="Mobile phone and hands"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;