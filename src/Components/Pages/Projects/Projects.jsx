import React from 'react'
import './Projects.css'
import { motion } from 'framer-motion'
import Button from '../../Additions/Button'


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
        <motion.div>
          <motion.div className="circle12"/>
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
                    E-Commerce Shop
              </h2>
              <h5>E-commerce shop template created using modern web technologies.
                Project has both modern design elements and functionalities that allows user 
                to select the product, read info about the product or add to cart for a purchase.
              </h5>
              <div className='project-technologies'>
                  <h4>Technologies used</h4>
                  <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>ReactJs</li>
                  </ul>
                  <ul>
                      <li>Framer motion</li>
                      <li>Styled components</li>
                  </ul>
                </div>
              <div className="btn-container">
                
                <a href="https://github.com/Asror-Odilov/E-Commerce-shop.git" target='_blank'>
                  <Button props='source code'/>
                </a>
                <a href="https://cute-brioche-b2f684.netlify.app/" target="_blank">
                  <Button props='view demo'/>
                </a>           
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
              <img src="./img/project_todo.png" alt="" />
              </div>
              <div className="right">
              <h2>
                    Todo List app
                </h2>
              <h5>
                To do list of tasks, created using TypeScript with drag and drop functionality.
              </h5>
                <div className='project-technologies'>
                  <h4>Technologies I use</h4>
                  <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>ReactJs</li>
                      <li>TypeScript</li>
                  </ul>
                  <ul>
                      <li>React beautiful dnd</li>
                  </ul>
                </div>
              <div className="btn-container">
                  
                <a href="https://github.com/Asror-Odilov/Todo_List_App.git" target='_blank'>
                  <Button props='source code'/>
                </a>
                <a href="https://chimerical-trifle-780155.netlify.app/" target="_blank">
                  <Button props='view demo'/>
                </a>
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
                    Movies Website
              </h2>
              <h5>
                Web movie template that has modern UI elements, created using modern web frameworks and styles.
                (inspired by Netflix) 
              </h5>
              <div className='project-technologies'>
                  <h4>Technologies I use</h4>
                  <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>ReactJs</li>
                      <li>TypeScript</li>
                  </ul>
                  <ul>  
                      <li>Framer motion</li>
                      <li>Styled components</li>
                  </ul>
                </div>
              <div className="btn-container">
                  
                <a href="https://github.com/Asror-Odilov/React_Movie_app.git" target='_blank'>
                  <Button props='source code'/>
                </a>
                <a href="https://stunning-syrniki-36cb60.netlify.app/" target="_blank">
                  <Button props='view demo'/>
                </a>
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