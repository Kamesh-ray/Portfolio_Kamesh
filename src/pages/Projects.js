import React from 'react'
import { motion } from 'framer-motion';
import LayoutHeader from './LayoutHeader';


const Projects = () => {

const ProjectData = {
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
  ]
}

  return (
    <div>
                <LayoutHeader/>

        {/* PROJECTS */}
      <section id="projects" className="container py-5">
        <h3 className="mb-4" style={{color:"#0FF0FC"}}>Projects</h3>
        <div className="row g-4">
          {ProjectData.projects.map(p => (
            <motion.div className="col-md-6" key={p.title} whileHover={{ y: -4 }} 
             initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{cursor:"pointer"}}
            >
              <div className="card p-3 h-100 bg-transparent text-light border-primary">
                <h5 style={{color:"skyblue"}}>{p.title}</h5>
                <p>{p.desc}</p>
                <small className="text-warning">Tech : <span style={{color:"#00ff00"}}>{p.tech.join(', ')}</span></small>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects
