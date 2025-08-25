import React from 'react'
import LayoutHeader from './LayoutHeader'
import { motion } from 'framer-motion';


const About = () => {

    const data = {
      experience: [
        { 
          role: 'Software Developer & Digital Marketing Intern', 
          company: 'Crest Climbers Software Solutions Pvt Ltd',
          period: '15th Sep 2024 – 26th Jan 2025', 
          details: 'Worked on software development and digital marketing projects as an intern, gaining hands-on experience in development practices and digital strategies.'
        },
        { 
          role: 'Frontend Developer', 
          company: 'Digipin Technologies Pvt Ltd',
          period: '27th Jan 2025 – 15th Jun 2025', 
          details: 'Contributed as a frontend developer, building responsive UIs, integrating APIs, and collaborating with cross-functional teams to deliver client projects.'
        }
      ],
  education: [
    { degree: 'B.E. Mechanical Engineering', year: '2022', college: 'SRI RAM ENGINEERING COLLEGE, VEPPAMPATTU', cgpa: '7.42 CGPA' }
  ],
  certifications: [
    {
      name: 'Java Full Stack Course – Besant Technologies (Jan – Aug 2024)',
      file: '/certifications/Besant_Java_FullStack.pdf'
    },
    {
      name: 'Internship Completion Certificate – Crest Climbers Software Solutions (Sep 2024 – Jan 2025)',
      file: '/certifications/CrestClimbers_Internship.pdf'
    },
    {
      name: 'Experience Certificate – Digipin Technologies (Jan 2025 – Jun 2025)',
      file: '/certifications/Digipin_Experience.pdf'
    }
  ],
    }

  return (
    <div>
        <LayoutHeader/>
    {/* EXPERIENCE & EDUCATION */}
<section className="container py-5 row g-4 mx-auto">
  {/* Experience */}
  <div className="col-md-6">
    <motion.div
      className="card p-3 h-100 text-light bg-transparent border-primary"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{  ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      style={{cursor:"pointer"}}
    >
      <h5 style={{color:"#0FF0FC"}}>Experience</h5>
      <ul className="mb-0">
  {data.experience.map((e, i) => (
    <li key={i} className="mb-3">
      <strong style={{color:"gold"}}>{e.company}</strong>{" "}
      <p className="text-light">• {e.role} • {e.period}</p>
      <div>{e.details}</div>
    </li>
  ))}
</ul>

    </motion.div>
  </div>

  {/* Education */}
  <div className="col-md-6 bg-transparent">
    <motion.div
      className="card p-3 h-100 text-light bg-transparent border-primary"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      style={{cursor:"pointer"}}
    >
      <h5 style={{color:"#0FF0FC"}}>Education</h5>
      <ul className="mb-0">
        {data.education.map((ed, i) => (
          <li key={i}>
            {ed.degree} – {ed.college}{" "}
            <span className="text-light">
              • {ed.year} ({ed.cgpa})
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
</section>

{/* CERTIFICATIONS */}
<section className="container py-5">
  <motion.div
    className="card p-3 text-light bg-transparent border-primary"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ ease: "easeOut" }}
    viewport={{ once: true }}
    whileHover={{ y: -4 }}
    style={{cursor:"pointer"}}
  >
    <h5 style={{color:"#0FF0FC"}}>Certifications</h5>
    <ul className="mb-0">
  {data.certifications.map((c, i) => (
    <li key={i} className="mb-2">
      {/* Open in new tab */}
      <a 
        href={c.file} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: "#0FF0FC", textDecoration: "none", marginRight: "10px" }}
      >
        {c.name}
      </a>

      {/* Download option with icon */}
      <a 
        href={c.file} 
        download 
        style={{ color: "gold", textDecoration: "none" }}
      >
        <i className="bi bi-file-earmark-pdf-fill"></i> Download
      </a>
    </li>
  ))}
</ul>
  </motion.div>
</section>
    </div>
  )
}

export default About
