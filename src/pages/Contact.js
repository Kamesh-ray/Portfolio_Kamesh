import React from 'react'
import LayoutHeader from './LayoutHeader'
import { motion } from "framer-motion";

const Contact = () => {


    const ContcatData = {
         contact: {
    email: 'kameshak232000@gmail.com',
    github: 'https://github.com/Kamesh-ray',
    linkedin: 'https://www.linkedin.com/in/kamesh23',
    phone: '+91 6369042415'
  }
    }

  return (
    <div>
                <LayoutHeader/>

        {/* CONTACT */}
     <footer id="contact" className="container py-5">
  <motion.div
    className="card p-3 text-light bg-transparent border-primary"
    initial={{ opacity: 0, y: 60 }}    
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <h5 style={{color:"#0FF0FC"}}>Contact</h5>
    <p>Email: {ContcatData.contact.email}</p>
    <p>Phone: {ContcatData.contact.phone}</p>
    <p>
      GitHub:{" "}
      <a
        href={ContcatData.contact.github}
        target="_blank"
        rel="noreferrer"
        style={{ color: "#00ff00" }}
      >
        {ContcatData.contact.github}
      </a>
    </p>
    <p>
      LinkedIn:{" "}
      <a
        href={ContcatData.contact.linkedin}
        target="_blank"
        rel="noreferrer"
        style={{ color: "#00ff00" }}
      >
        {ContcatData.contact.linkedin}
      </a>
    </p>
  </motion.div>
</footer>
    </div>
  )
}

export default Contact
