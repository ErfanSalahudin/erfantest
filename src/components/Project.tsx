import React from 'react';
import { motion } from 'framer-motion';
import project1 from '../../assets/blui1.png';
import project2 from '../../assets/gambar5.jpg';
import project3 from '../../assets/gambar6.jpg';
import project4 from '../../assets/selenium.jpg';
import { Link } from 'react-router-dom';
import arrowRight from '../../assets/Vector2.png';
import backgroundImage from '../../assets/gambar2.jpg';


const Project: React.FC = () => {
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const projectsData = [
    { img: project1, alt: 'UI Design', title: 'UIDesign', path: '/UIDesign' },
    { img: project2, alt: 'Backend Development', title: 'BACKEND', path: '/backend' },
    { img: project3, alt: 'Frontend Development', title: 'FRONTEND', path: '/frontend' },
    { img: project4, alt: 'QA Tester', title: 'QA TESTER', path: '/qa-tester' },
  ];

  return (
    <section 
      id="project" 
      className="relative min-h-screen py-20 px-10 flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div> 
      <div className="relative z-10 w-full">
        <motion.h2
          className="text-6xl font-serif mb-6 text-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          PROJECT
        </motion.h2>
        <motion.div
          className="w-32 h-1 bg-white mb-16 mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        ></motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto text-left">
          {projectsData.map((project, index) => (
            <Link to={project.path} key={index}> 
              <motion.div
                id={project.title === 'UIDesign' ? 'ui-design' : undefined}
                className="relative group cursor-pointer"
                variants={projectVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={project.img} alt={project.alt} className="w-full h-72 object-cover rounded-xl shadow-lg border border-gray-700" />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-3xl font-serif font-bold flex items-center">
                    {project.title} <img src={arrowRight} alt="Right Arrow" className="inline-block w-8 h-8 ml-3" />
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
