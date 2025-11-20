import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../../assets/gambar9.png';
import arrowDown from '../../assets/Vector1.png';
import backgroundImage from '../../assets/gambar2.jpg';

const Hero: React.FC = () => {
  const handleScrollToProfile = () => {
    const profileSection = document.getElementById('profile');
    if (profileSection) {
      profileSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen flex flex-col items-center justify-center text-white p-4 md:p-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center max-w-lg mx-auto"> 
        
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80 mb-12 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl shadow-blue-500/50"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 1, type: "spring", stiffness: 50 }}
        >
          <img 
            src={profilePic} 
            alt="RD MUHAMAD ERFAN SALAHUDIN" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          RD MUHAMAD ERFAN SALAHUDIN
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mt-4 font-sans text-gray-400 text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          Data Entry | Front End Developer | UI Designer | QA Tester
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        onClick={handleScrollToProfile}
      >
        <img src={arrowDown} alt="Down Arrow" className="w-8 h-8 md:w-10 md:h-10 animate-bounce" />
      </motion.div>
      
    </section>
  );
};

export default Hero;
