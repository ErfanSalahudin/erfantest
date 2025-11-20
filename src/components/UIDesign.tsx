import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gambar1 from '../../assets/grui1.png';
import gambar2 from '../../assets/grui2.png';
import gambar3 from '../../assets/grui3.png';
import gambar4 from '../../assets/tkui1.png';
import gambar5 from '../../assets/tkui2.png';
import gambar6 from '../../assets/tkui3.png';
import gambar7 from '../../assets/blui1.png';
import gambar8 from '../../assets/blui2.png';
import gambar9 from '../../assets/blui3.png';
import Vector3 from '../../assets/Vector3.png';

const UIDesign: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative p-12 bg-black text-white min-h-screen font-sans">
      <Link to="/#project" className="absolute top-8 left-6 z-10 flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
        <img src={Vector3} alt="Back to Home" className="w-6 h-6 cursor-pointer hover:opacity-75 transition-opacity" />
        <span className="text-sm font-large">BACK</span>
      </Link>

      <div className="mt-16 mb-24 p-6 border border-gray-800 rounded-xl shadow-2xl shadow-blue-900/20 transition duration-300 hover:border-blue-500/50">
        <h2 className="text-3xl font-extrabold mb-6 pb-2 text-blue-400 uppercase tracking-widest border-b border-blue-600/50">
          CASE STUDY GREEBOOKS
        </h2>
        
        <div className="flex flex-col md:flex-row mb-12">
          <div className="md:w-7/12 md:pr-10 text-base leading-relaxed text-gray-300 text-justify">
            <p className="mb-4">
              The user interface (UI) design for this digital library platform has been strategically conceptualized to go beyond mere functionality, presenting a luxurious, professional, and highly inviting digital experience. We deliberately chose and dominated the color palette with a deep Navy Blue. This color has been psychologically proven to instill trust, stability, and intelligence, which are essential for an education and literacy brand, while creating an optimal calm and focused atmosphere for readers.The tranquility of the dark color is perfectly balanced with crisp and clean White accents. These accents are cleverly used to highlight key interactive elements and text, ensuring uncompromised readability at any resolution. Support from modern and clean typography complements this design, resulting in an elegant and easy-to-scan visual hierarchy, allowing users to process information quickly and effortlessly.More than just aesthetics, the layout is designed based on cutting-edge information architecture principles. This well-structured and logical layout not only enables highly intuitive navigation—turning new users into platform experts in seconds—but also ensures a neat, elegant, and captivating content presentation.
            </p>
          </div>
          
          <div className="md:w-4/12 mt-4 md:mt-0">
            <img
              src={gambar2}
              alt="Greebooks Desktop UI Screenshot"
              className="w-full h-64 rounded-lg shadow-xl"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={gambar1}
            alt="Greebooks UI Screenshot 1"
            className="w-full h-auto rounded-lg shadow-xl"
          />
          <img
            src={gambar3}
            alt="Greebooks UI Screenshot 2"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>

        <a 
          href="https://www.figma.com/proto/0miXT3WXTsyEaryjQ4jfIB/Greeflag-UI?node-id=1-2&starting-point-node-id=1%3A2&t=g4KEbHaD7ZvDyNk9-1" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm mt-8 text-blue-400 hover:text-blue-200 transition duration-300 block truncate font-medium"
        >
          Lihat di Figma ↗
        </a>
      </div>

<hr className="my-20 border-gray-800" /> 
      
      <div className="mb-24 p-6 border border-gray-800 rounded-xl shadow-2xl shadow-red-900/20 transition duration-300 hover:border-red-500/50">
        <h2 className="text-3xl font-extrabold mb-6 pb-2 text-red-400 uppercase tracking-widest border-b border-red-600/50">
          CASE STUDY TK INSAN HASANAH
        </h2>
        
        <p className="text-base mb-10 leading-relaxed text-gray-300 text-justify">
            The Insan Hasanah Kindergarten mobile application is designed with a philosophy of visual warmth and functional efficiency. The user interface (UI) is deliberately designed to be bright and energetic, instantly reflecting a fun and positive learning environment, which is very suitable for early childhood education. We ensure that the design is truly user-friendly, with very simple navigation and clear iconography, so that it can be easily accessed by busy parents, teachers, and students under supervision.The color palette is dominated by a combination of blue, white, and red, taken directly from the school's visual identity. The cohesiveness of these colors not only strengthens the school's branding in the digital realm, but also helps create a structured and familiar environment for users. The main focus of the entire user experience (UX) is on easy access to crucial information. Whether it's class schedules, school announcements, student progress reports, or registration forms, all information is presented through a clean and intuitive layout. The app acts as a smart communication bridge, empowering parents with real-time updates and providing teachers with efficient tools to manage information, thereby increasing engagement and transparency between the school and parents.
        </p>
        
        <div className="grid grid-cols-3 gap-6">
          <img src={gambar4} alt="TK Insan Hasanah UI Screenshot 1" className="w-full h-auto rounded-lg shadow-xl" />
          <img src={gambar5} alt="TK Insan Hasanah UI Screenshot 2" className="w-full h-auto rounded-lg shadow-xl" />
          <img src={gambar6} alt="TK Insan Hasanah UI Screenshot 3" className="w-full h-220 rounded-lg shadow-xl" />
        </div>

        <a 
          href="https://www.figma.com/proto/t2tM5wZwzsugv8KCOwiitT/Project-Ui-Tk-Insan-Hasana?node-id=7-7&starting-point-node-id=7%3A7&t=VNg4Z7ymbAxuACQS-1" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm mt-8 text-red-400 hover:text-red-200 transition duration-300 block truncate font-medium"
        >
          Lihat di Figma ↗
        </a>
      </div>
      
      <hr className="my-20 border-gray-800" />

      <div className="mb-24 p-6 border border-gray-800 rounded-xl shadow-2xl shadow-yellow-900/20 transition duration-300 hover:border-yellow-500/50">
        <h2 className="text-3xl font-extrabold mb-6 pb-2 text-yellow-400 uppercase tracking-widest border-b border-yellow-600/50">
          CASE STUDY BLUEBANDFLIX
        </h2>

        <p className="text-base mb-10 leading-relaxed text-gray-300 text-justify">
              The Bluebandflix video streaming app is carefully designed to redefine the standard of content viewing, presenting an ultra-modern, dynamic, and highly engaging look. Our design focus is entirely on optimal user experience (UX), ensuring that every interaction, from browsing to playback, feels smooth and intuitive.
              We adopted a unique and bold color palette, dominated by a combination of Bold Blue and Energetic Yellow. This color choice not only directly reflects Bluebandflix's brand identity as an energetic, innovative, and professional service, but also creates a sharp visual contrast that helps movie and series covers stand out. The app layout uses a content-first principle, where visual content (posters, thumbnails, and previews) always takes center stage.
              The navigation structure has been simplified and refined for quick discovery. A smart categorization system, responsive search bar, and adaptive layout ensure users can easily find the content they want or spontaneously discover new shows, maximizing viewing time and minimizing search time. Overall, Bluebandflix's design creates a streaming environment that is not only visually stunning but also highly efficient, ultimately increasing user retention and positioning the platform as the top choice in the competitive streaming market.
       </p>

        <div className="grid grid-cols-3 gap-6">
          <img src={gambar7} alt="Bluebandflix UI Screenshot 1" className="w-full h-200 rounded-lg shadow-xl" />
          <img src={gambar8} alt="Bluebandflix UI Screenshot 2" className="w-full h-200 rounded-lg shadow-xl" />
          <img src={gambar9} alt="Bluebandflix UI Screenshot 3" className="w-full h-auto rounded-lg shadow-xl" />
        </div>

        <a
          href="https://www.figma.com/proto/zsrHmwJsDYWGP8JhiJyfiV/ProjectBlue?node-id=1-29&starting-point-node-id=1%3A29&t=YWpQXDxRKRVQdZu7-1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm mt-8 text-yellow-400 hover:text-yellow-200 transition duration-300 block truncate font-medium"
        >
          Lihat di Figma ↗
        </a>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-20"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default UIDesign;
