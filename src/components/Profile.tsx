import React from 'react';
import { motion } from 'framer-motion';
import project3 from '../../assets/ijazah.jpg';
import backgroundImage from '../../assets/gambar2.jpg';

const Profile: React.FC = () => {
  return (
    <section 
      id="profile" 
      className="relative min-h-screen py-20 px-10 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div> 
      <div className="relative z-10 max-w-7xl flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 text-center pr-10 pl-10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-serif mb-6">PROFILE</h2>
          <div className="w-100 h-1 bg-white mb-10 mx-auto"></div>
          <p className="text-lg leading-normal font-sans">
            Graduate of Information Systems (GPA 3.20) with intensive experience as a Junior Web Developer,
            skilled in full-stack development using PHP/CodeIgniter 4 and structured programming
            (BNSP Certified). Proficient in responsive website UI/UX design and knowledgeable in
            Java Backend & DevOps. This experience is supported by skills as a Data Entry Operator
            (BPS Cianjur) who is accustomed to inputting, verifying, and managing large-scale data.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative w-[450px] h-[300px] rounded-2xl overflow-hidden shadow-lg border border-gray-700">
            <img src={project3} alt="Coding on Laptop" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
