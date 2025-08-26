import React from 'react'
import { motion } from 'framer-motion';
import LayoutHeader from './LayoutHeader';
import MyImage from '../assests/MyImage.jpg';
import { Link } from 'react-router-dom';

const Home = () => {

    const MainData = {
  tagline: 'React & Node.js Developer | Building user-friendly web apps with modern tech',
  about: `Mechanical Engineering graduate turned web developer with 8 months’ professional experience. 
  Skilled in building responsive and reusable UI components, integrating APIs, and delivering user-friendly 
  applications using ReactJS, Redux, Node.js, and MySQL/PostgreSQL. Passionate about solving problems and 
  continuously learning new technologies.`
    }

    const words = [
      { text: "Think", color: "blue" },
      { text: "Create", color: "yellow" },
      { text: "Conquer", color: "gold" },
    ];

    const quote = `"Think.Create.Conquer"`;

  return (
     <div className="bg-transparent text-light">
      <LayoutHeader />
      
      {/* HERO SECTION */}
      <section className="container py-5">
        <div className="row align-items-center">
          {/* Left Content */}
          <motion.div 
            className="col-md-8 col-12 mb-4 mb-md-0" 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <h2 className="fw-bold fs-2 fs-md-1">{MainData.name}</h2>
            <p className="lead" style={{ color: "#0FF0FC" }}>{MainData.tagline}</p>
            <p className="fs-6">{MainData.about}</p>
            <div className="mt-3 d-flex flex-wrap gap-2">
              <a 
                href="https://bio-qr.vercel.app/" 
                className="btn btn-primary"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View My Work
              </a>
              <Link 
                to="/pages/Contact" 
                className="btn btn-outline-secondary border-primary"
              >
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="col-md-4 col-12 d-flex justify-content-center" 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6 }}
          >
            <div className="bg-info bg-gradient rounded-circle d-flex align-items-center justify-content-center p-1" 
                 style={{ width: '180px', height: '180px' }}>
              <img 
                src={MyImage} 
                alt="Your Photo" 
                className="img-fluid rounded-circle" 
                style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: '100%' }} 
              />
            </div>
          </motion.div>
        </div>

        {/* Quote */}
     <marquee className="mt-5"><i className='fs-2' style={{color:"gold"}}>{`${quote}`}</i></marquee>
      </section>
    </div>
  )
}

export default Home
