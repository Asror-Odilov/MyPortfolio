import { motion } from 'framer-motion'
import React from 'react'
import { AiFillDatabase } from 'react-icons/ai'
import { SiWebcomponentsdotorg } from 'react-icons/si'
import { ImDatabase } from 'react-icons/im'
import { ForSvg } from './ForSvg.jsx'
import List from '../Content.jsx'

const Algorithms = () => {

  const animation = {
    initial: {opacity: 0},
    whileInView: {opacity: 1,
    transition: {duration: 3}  
    }}

    const animation1 = {
      initial: {y: '10vh'},
      whileInView: {y: 0,
      transition: {duration: 0.8}
    }}

  return (
    <div className="algorythm">
        <motion.div className="context"
          variants={animation1}
          initial="initial"
          whileInView="whileInView"
        >
            <h6>Writing Algorithms</h6>
            <h1>Algorithms and</h1> 
            <h1>Data structures</h1>   
            <p>I am capable of creating a range of programs such as scripting, data 
              visualization, web development, and writing algorithms to solve problems.</p>
            
            <div className='lists-con'>
              <List icons={<ImDatabase style={{color: 'blue'}} />} text='Data visualization'/>
              <List icons={<SiWebcomponentsdotorg style={{color: 'blue'}} />} text='Data structures'/>
              <List icons={<AiFillDatabase style={{color: 'blue'}} />} text='Wireframes amd visual mockups'/>
            </div>
         
            <motion.div className="circle9"
              variants={animation1}
              initial="initial"
              whileInView="whileInView"
            />
            <motion.div className="circle11" 
              variants={animation1}
              initial="initial"
              whileInView="whileInView"
            />  

            <motion.div className="square6" 
              variants={animation}
              initial="initial"
              whileInView="whileInView"
            />
            <motion.div className="square7" 
              variants={animation}
              initial="initial"
              whileInView="whileInView"
            />
            <motion.div className="square8" 
              variants={animation}
              initial="initial"
              whileInView="whileInView"
            />
        </motion.div>
        <div className="svg">
            <ForSvg />
        </div>
    
    </div>
  )
}

export default Algorithms;