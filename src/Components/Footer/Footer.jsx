import logo from '../../assets/easelogo.png';
import { useState, useEffect } from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer({ onTriggerPopup }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCallNow = () => {
    window.open('tel:+1800XXXXXXX', '_self'); // Replace with real number
  };

  const handleSocialClick = (platform) => {
    const socialLinks = {
      facebook: 'https://www.facebook.com/profile.php?id=61575195173339',
      instagram: 'https://www.instagram.com/easewithdraw/',
      whatsapp: 'https://wa.me/',
      email: 'mailto:support@easewithdraw.com'
    };
    if (socialLinks[platform]) {
      window.open(socialLinks[platform], '_blank');
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 rounded-xl shadow-xl">
      {/* Heading Section */}
      <div 
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 block sm:inline">
           Easewithdraw
          </span>
          <br className="hidden sm:block" />
          <span className="text-white block sm:inline mt-2 sm:mt-0"> Serving Clients Across the U.S.</span>
        </h2>

        <div className="mt-6 sm:mt-8">
          <button onClick={onTriggerPopup}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 cursor-pointer
            transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 
            focus:ring-purple-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#9810fa' }}
          >
            Reach Us
          </button>
        </div>

       
      </div>

      {/* Separator Line */}
      <div className="max-w-full mx-auto mt-12 sm:mt-16 px-4 sm:px-0">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
      </div>

      {/* Footer Main Section */}
      <div className="max-w-7xl mx-auto mt-8 sm:mt-12">
        {/* Mobile View */}
        <div className="block md:hidden space-y-6">
          <div className="text-center">
            <img src={logo} alt="EaseWithdraw Logo" className="mx-auto h-12 sm:h-14" />
          </div>
          <div className="text-center">
            <button 
              onClick={handleCallNow}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg
              transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 
              focus:ring-green-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              <span className="font-medium">Call Now</span>
            </button>
          </div>
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Secure</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Compliant</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Fast</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm">Trusted</a>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-start mb-8">
          <div className="flex-shrink-0">
            <img src={logo} alt="EaseWithdraw Logo" className="lg:w-full md:w-50 h-auto" />
          </div>
          <div className="flex flex-col items-center space-y-3 md:space-y-4">
            <div className="flex gap-4 md:gap-6 lg:gap-8 xl:gap-12">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base xl:text-lg">Secure</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base xl:text-lg">Compliant</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base xl:text-lg">Fast</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base xl:text-lg">Trusted</a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <button 
              onClick={handleCallNow}
              className="flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 xl:px-8 xl:py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg
              transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 
              focus:ring-green-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl text-sm md:text-base xl:text-lg"
            >
              <Phone size={18} className="md:w-5 md:h-5 xl:w-6 xl:h-6" />
              <span className="font-medium">Call Now</span>
            </button>
          </div>
        </div>

        {/* Bottom Section: New Footer Info */}
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center pt-6 border-t border-gray-700">
          
          <div className="text-gray-400 text-sm text-center sm:text-right order-1 sm:order-2">
            Support: 
            <a href="mailto:support@easewithdraw.com" className="text-purple-400 hover:text-purple-300 ml-1 transition-colors duration-300">
              support@easewithdraw.com
            </a> 
            <span className="hidden sm:inline-block mx-2">|</span>
            <a href="tel:+1800XXXXXXX" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
              1‑800‑XXX‑XXXX
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
