// PortfolioStarterBootstrap.jsx
// React + Bootstrap + Framer Motion personalized for Kamesh A

import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = {
  name: 'Kamesh A',
  title: 'Web Application Developer',
  tagline: 'React & Node.js Developer | Building user-friendly web apps with modern tech',
  about: `Mechanical Engineering graduate turned web developer with 8 months’ professional experience. 
  Skilled in building responsive and reusable UI components, integrating APIs, and delivering user-friendly 
  applications using ReactJS, Redux, Node.js, and MySQL/PostgreSQL. Passionate about solving problems and 
  continuously learning new technologies.`,
  skills: {
    frontend: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'API Integration (REST & GraphQL)', 'Redux Toolkit'],
    backend: ['Node.js', 'Express.js', 'Core Java (Basic)', '.NET (Basic)'],
    db: ['MySQL', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'Postman', 'MS Office (Excel, Word, PowerPoint)', 'SEO', 'SEM', 'SMM']
  },
  projects: [
    {
      title: 'Food Delivery Web App',
      desc: 'ReactJS + Redux Toolkit + GraphQL (Apollo Client). Features include real-time order tracking with maps, cart management, admin dashboard, conditional rendering logic.',
      tech: ['ReactJS', 'Redux Toolkit', 'GraphQL', 'Apollo Client', 'Maps API']
    },
    {
      title: 'BuildFlow – Construction Project Management System',
      desc: 'Developed dashboards, data visualization components, form validation, project updates, and real-time status views. Optimized performance and improved component reuse.',
      tech: ['ReactJS', 'Data Visualization', 'Formik']
    }
  ],
  experience: [
    { role: 'Frontend Developer', period: 'Oct 2024 – May 2025', details: 'Built responsive web pages, integrated REST APIs, implemented dynamic UI components, collaborated with design and backend teams. Used Git, GitHub, and Postman for version control and API testing.' }
  ],
  education: [
    { degree: 'B.E. Mechanical Engineering', year: '2022', college: 'SRI RAM ENGINEERING COLLEGE, VEPPAMPATTU', cgpa: '7.2 CGPA' }
  ],
  certifications: ['Java Full Stack Course, Besant Technologies (8 months, Jan – Aug 2024)'],
  contact: {
    email: 'kameshak232000@gmail.com',
    github: 'https://github.com/Kamesh-ray',
    linkedin: 'https://www.linkedin.com/in/kamesh23',
    phone: '+91 6369042415'
  }
};

export default function PortfolioStarterBootstrap() {
  return (
    <div className="bg-light text-dark">
      {/* HEADER */}
      <header className="container py-3 d-flex justify-content-between align-items-center border-bottom">
        <div>
          <h1 className="h4 mb-0">{data.name}</h1>
          <small className="text-muted">{data.title}</small>
        </div>
        <nav>
          <a href="#projects" className="me-3 text-decoration-none">Projects</a>
          <a href="#about" className="me-3 text-decoration-none">About</a>
          <a href="#contact" className="text-decoration-none">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="container py-5 row align-items-center">
        <motion.div className="col-md-8" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="display-5 fw-bold">{data.name}</h2>
          <p className="lead">{data.tagline}</p>
          <p>{data.about}</p>
          <div className="mt-3">
            <a href="#projects" className="btn btn-primary me-2">View My Work</a>
            <a href="#contact" className="btn btn-outline-secondary">Contact</a>
          </div>
        </motion.div>
        <motion.div className="col-md-4 d-flex justify-content-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <div className="bg-info bg-gradient rounded-3 d-flex align-items-center justify-content-center" style={{ width: '150px', height: '150px' }}>
            <span>Your Photo</span>
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="container py-5">
        <h3 className="mb-4">Skills</h3>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card p-3 h-100">
              <h5>Frontend</h5>
              <ul className="mb-0">{data.skills.frontend.map(s => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 h-100">
              <h5>Backend</h5>
              <ul className="mb-0">{data.skills.backend.map(s => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 h-100">
              <h5>Database & Tools</h5>
              <ul className="mb-0">{data.skills.db.map(s => <li key={s}>{s}</li>)}{data.skills.tools.map(s => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="container py-5">
        <h3 className="mb-4">Selected Projects</h3>
        <div className="row g-4">
          {data.projects.map(p => (
            <motion.div className="col-md-6" key={p.title} whileHover={{ y: -4 }}>
              <div className="card p-3 h-100">
                <h5>{p.title}</h5>
                <p>{p.desc}</p>
                <small className="text-muted">Tech: {p.tech.join(', ')}</small>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION */}
      <section className="container py-5 row g-4">
        <div className="col-md-6">
          <div className="card p-3 h-100">
            <h5>Experience</h5>
            <ul className="mb-0">
              {data.experience.map((e, i) => (
                <li key={i} className="mb-2">
                  <strong>{e.role}</strong> <span className="text-muted">• {e.period}</span>
                  <div>{e.details}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3 h-100">
            <h5>Education</h5>
            <ul className="mb-0">
              {data.education.map((ed, i) => (
                <li key={i}>{ed.degree} – {ed.college} <span className="text-muted">• {ed.year} ({ed.cgpa})</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="container py-5">
        <div className="card p-3">
          <h5>Certifications</h5>
          <ul className="mb-0">{data.certifications.map((c, i) => <li key={i}>{c}</li>)}</ul>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="container py-5">
        <div className="card p-3">
          <h5>Contact</h5>
          <p>Email: {data.contact.email}</p>
          <p>Phone: {data.contact.phone}</p>
          <p>GitHub: <a href={data.contact.github} target="_blank" rel="noreferrer">{data.contact.github}</a></p>
          <p>LinkedIn: <a href={data.contact.linkedin} target="_blank" rel="noreferrer">{data.contact.linkedin}</a></p>
        </div>
      </footer>
    </div>
  );
}
