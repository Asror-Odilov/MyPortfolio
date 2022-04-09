import React from 'react'
import './Projects.css'
import { motion } from 'framer-motion'


const Projects = () => {

  const animation = {
    initial: {opacity: 0},
    whileInView: {opacity: 1,
    transition: {duration: 3}  
    }}

    const animation1 = {
      initial: {y: 50},
      whileInView: {y: 0,
        transition: {duration: 0.8}
      }}
      

  return (
    <motion.div className="projects"
    variants={animation1}
    initial="initial"
    whileInView="whileInView"
    >
        
        {/* Heading */}
        <motion.div
          
        >
          <motion.div className="circle12"
            
          />
          <motion.h6
            
          >Repository</motion.h6>
        </motion.div>

        <motion.div className="project-con"
          variants={animation1}
          initial="initial"
          whileInView="whileInView"
        >

          {/* First Project */}
          <motion.div className="project-wrap"
            variants={animation1}
            initial="initial"
            whileInView="whileInView"
          >
              <div className="right">
              <h2>
                    Music Player
              </h2>
              <h5>Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Cumque beatae et quaerat 
              </h5>
              <h4>Technologies used:</h4>
              <div>
                <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>ReactJs</span> <span>Framer-Motion</span> <span>GSAP</span> <span>Styled Components</span>
              </div>
              </div>
              <div className="left">
              <img src="./img/untitled.png" alt="" />
              </div>
          </motion.div>

          {/* Second Project */}
          <motion.div className="project-wrap"
            variants={animation1}
            initial="initial"
            whileInView="whileInView"
          >
              <div className="left">
              <img src="./img/projects_img_music.png" alt="" />
              </div>
              <div className="right">
              <h2>
                    Music Player
                </h2>
              <h5>Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Cumque beatae et quaerat 
              </h5>
              <h4>Technologies used:</h4>
              <div>
                <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>ReactJs</span> <span>Framer-Motion</span> <span>GSAP</span> <span>Styled Components</span>
              </div>
              </div>
          </motion.div>


          {/* Third Project */}
          <motion.div className="project-wrap"
            variants={animation1}
            initial="initial"
            whileInView="whileInView"
          >
              <div className="right">
              <h2>
                    Music Player
              </h2>
              <h5>Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Cumque beatae et quaerat 
              </h5>
              <h4>Technologies used:</h4>
              <div>
                <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>ReactJs</span> <span>Framer-Motion</span> <span>GSAP</span> <span>Styled Components</span>
              </div>
              </div>
              <div className="left">
              <img src="./img/projects_img.png" alt="" />
              </div>
          </motion.div>
        </motion.div>
            
    </motion.div>
  )
}

export default Projects