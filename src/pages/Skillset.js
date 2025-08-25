import React from 'react'
import LayoutHeader from './LayoutHeader'
import { motion } from "framer-motion";

const Skillset = () => {

const SkillData = {
    skills: {
    frontend: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'API Integration (REST & GraphQL)', 'Redux Toolkit'],
    backend: ['Node.js', 'Express.js', 'Core Java (Basic)', '.NET (Basic)'],
    db: ['MySQL', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'Postman', 'MS Office (Excel, Word, PowerPoint)', 'SEO', 'SEM', 'SMM']
  }
}

  return (
    <div>
                <LayoutHeader/>

        {/* SKILLS */}
     <section id="skills" className="container py-5">
  <h3 className="mb-4" style={{color:"#0FF0FC"}}>Skills</h3>
  <div className="row g-4">
    {/* Frontend */}
    <div className="col-md-4">
      <motion.div
        className="card p-3 h-100 text-light bg-transparent border-primary"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        style={{cursor:"pointer"}}
      >
        <h5 style={{color:"#0FF0FC"}}>Frontend</h5>
        <ul className="mb-0">
          {SkillData.skills.frontend.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </motion.div>
    </div>

    {/* Backend */}
    <div className="col-md-4">
      <motion.div
        className="card p-3 h-100 text-light bg-transparent border-primary"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        style={{cursor:"pointer"}}

      >
        <h5 style={{color:"#0FF0FC"}}>Backend</h5>
        <ul className="mb-0">
          {SkillData.skills.backend.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </motion.div>
    </div>

    {/* Database & Tools */}
    <div className="col-md-4">
      <motion.div
        className="card p-3 h-100 text-light bg-transparent border-primary"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        style={{cursor:"pointer"}}
      >
        <h5 style={{color:"#0FF0FC"}}>Database & Others</h5>
        <ul className="mb-0">
          {SkillData.skills.db.map((s) => (
            <li key={s}>{s}</li>
          ))}
          {SkillData.skills.tools.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Skillset
