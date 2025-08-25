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
        <LayoutHeader/>
  {/* HERO */}
      <section className="container py-5 row align-items-center" style={{margin:"auto"}}>
        <motion.div className="col-md-8" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="display-5 fw-bold">{MainData.name}</h2>
          <p className="lead" style={{color:"#0FF0FC"}}>{MainData.tagline}</p>
          <p>{MainData.about}</p>
          <div className="mt-3">
            <a href="https://bio-qr.vercel.app/" className="btn btn-primary me-2">View My Work</a>
            <Link to="/pages/Contact" className="btn btn-outline-secondary border-primary">Contact</Link>
          </div>
        </motion.div>
 <motion.div className="col-md-4 d-flex justify-content-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
  <div className="bg-info bg-gradient rounded-3 d-flex align-items-center justify-content-center" style={{ width: '150px', height: '150px' }}>
<img src={MyImage} alt="Your Photo" className="rounded-3" style={{ width: '150px', height: '200px', 
    objectFit: 'cover' , objectPosition : 'top'}} />  
    </div>
</motion.div>
<marquee className="mt-5"><i className='fs-2' style={{color:"gold"}}>{`${quote}`}</i></marquee>  
</section>
    </div>
  )
}

export default Home
