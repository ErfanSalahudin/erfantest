import React from 'react';
import { motion } from 'framer-motion';
import cert1 from '../../assets/gambar7.jpg';
import cert2 from '../../assets/gambar8.jpg';
import arrowRight from '../../assets/Vector2.png';
import backgroundImage from '../../assets/gambar2.jpg';


const Certified: React.FC = () => {
  const certVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section
      id="certified" 
      className="relative min-h-screen py-20 px-10 flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div> 
      <div className="relative z-20 w-full flex flex-col items-center justify-center">
        
        <motion.h2
          className="text-6xl font-serif mb-6 text-white"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          CERTIFIED
        </motion.h2>
        <motion.div
          className="w-32 h-1 bg-white mb-16"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        ></motion.div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-24">
          {[
            { img: cert1, alt: 'BNSP Certificate', title: 'BNSP' },
            { img: cert2, alt: 'Cisco Certificate', title: 'CISCO' },
          ].map((cert, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              variants={certVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={cert.img} alt={cert.alt} className="w-[450px] h-[300px] object-cover rounded-xl shadow-lg border border-gray-700" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-3xl font-serif font-bold flex items-center">
                  {cert.title} <img src={arrowRight} alt="Right Arrow" className="inline-block w-8 h-8 ml-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certified;
