import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../../assets/gambar9.png';
import instagramIcon from '../../assets/instagram.png';
import gmailIcon from '../../assets/gmail.png';
import linkedinIcon from '../../assets/linkedin.png';
import phoneIcon from '../../assets/phone.png';
import backgroundImage from '../../assets/gambar2.jpg';

const Contact: React.FC = () => {
  const contactItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
    id="contact"
      className="relative h-screen flex flex-col items-center justify-center text-white p-4 md:p-10 bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
    >

      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center">

        <motion.div
          className="md:w-1/2 flex justify-center mb-12 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gray-600">
            <img src={profilePic} alt="RD MUHAMAD ERFAN SALAHUDIN" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        <div className="md:w-1/2 text-left md:pl-20 pr-10">
          <motion.h2
            className="text-6xl font-serif mb-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            CONTACT
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-white mb-16"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>
          <div className="space-y-8">
            {[
              { icon: instagramIcon, alt: 'Instagram', text: '@revrnss / @edittrix_' },
              { icon: gmailIcon, alt: 'Gmail', text: 'rdmuhamaderfansalahudin@gmail.com' },
              { icon: linkedinIcon, alt: 'LinkedIn', text: 'Rd Muhamad Erfan Salahudin' },
              { icon: phoneIcon, alt: 'Phone', text: '+6285591256012' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                variants={contactItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
              >
                <img src={item.icon} alt={item.alt} className="w-10 h-10 mr-6" />
                <span className="text-xl font-sans">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
