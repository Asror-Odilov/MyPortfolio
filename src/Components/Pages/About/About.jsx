import React from 'react'
import './About.css'
import { motion } from 'framer-motion'
import Button from '../../Additions/Button'
// import { Button } from '../../Additions/Button'
 
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
          <h1>About me</h1>
          <p>I am a highly motivated individual, with well-developed Front End and 
          Interpersonal skills, having a good knowledge of computer software and hardware, 
          willing to work hard to produce high results. 
          I am capable of creating a range of programs such as scripting, data visualization, web development, and writing algorithms to solve problems 
          which I hope would benefit the growth of your company.
          </p>
          <div className='technologies'>
            <h4>Technologies I use</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>ReactJs</li>
                <li>SQL</li>
            </ul>
            <ul>    
                <li>Sass</li>
                <li>Styled Components</li>
                <li>Framer motion</li>
                <li>Material UI</li>
            </ul>    
            <ul>    
                <li>Adobe XD</li>
                <li>Adobe Illustrator</li>
                <li>Figma</li>
                <li>Git</li>
            </ul>
          </div>
        </motion.div>
        <div className="img-container">
            <motion.div className="image"
              variants={animation1}
              initial="initial"
              whileInView="whileInView"
            >
                <img src="./img/mine_2.png" alt="" />
            </motion.div>        
        </div>
    </motion.div>
  )
}

export default About