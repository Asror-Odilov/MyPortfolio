import React from 'react'
import './About.css'
import { motion } from 'framer-motion'
 
const About = () => {

  const animation1 = {
    initial: {y: 50},
    whileInView: {y: 0,
    transition: {duration: 0.8}
  }}

  return (
    <motion.div className="container"
      variants={animation1}
      initial="initial"
      whileInView="whileInView"
    >
        <motion.div className="title"
          variants={animation1}
          initial="initial"
          whileInView="whileInView"
        >
          <motion.h1
            variants={animation1}
            initial="initial"
            whileInView="whileInView"
          >About me</motion.h1>
          <motion.p
            variants={animation1}
            initial="initial"
            whileInView="whileInView"
          >Lorem ipsum dolor sit amet consectetur 
            adipisicing elit Lorem ipsum dolor sit 
            amet consectetur adipisicing elit. 
            Officiis distinctio aliquid vel consectetur 
            expedita minima dolore iusto quisquam ullam non 
          </motion.p>
          <motion.div className='technologies'
            variants={animation1}
            initial="initial"
            whileInView="whileInView"
          >
            <h4>Technologies I use</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>ReactJs</li>
                <li>Sass</li>
            </ul>
            <ul>    
                <li>Styled Components</li>
                <li>Framer motion</li>
                <li>Material UI</li>
                <li>Adobe XD</li>
            </ul>    
            <ul>    
                <li>Adobe Illustrator</li>
                <li>Figma</li>
                <li>Git</li>
            </ul>
          </motion.div>
        </motion.div>
        <div className="img-container">
            <motion.div className="image"
              variants={animation1}
              initial="initial"
              whileInView="whileInView"
            >
                <img src="" alt="" />
            </motion.div>        
        </div>
    </motion.div>
  )
}

export default About