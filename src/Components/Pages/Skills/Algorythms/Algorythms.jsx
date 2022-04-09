import { motion } from 'framer-motion'
import React from 'react'
// import { Content } from '../Content'
import { SiWebcomponentsdotorg } from 'react-icons/si'
import { BsPaintBucket } from 'react-icons/bs'
import { ForSvg } from './ForSvg.jsx'
import List from '../Content.jsx'

const Algorithms = () => {

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
    <div className="algorythm">
        <motion.div className="context"
          variants={animation1}
          initial="initial"
          whileInView="whileInView"
        >
            <motion.h6
              variants={animation1}
              initial="initial"
              whileInView="whileInView"
            >Creating websites</motion.h6>
            
            <motion.h1
              variants={animation1}
              initial="initial"
              whileInView="whileInView"
            >Algorithms and</motion.h1> 
            
            <motion.h1
              variants={animation1}
              initial="initial"
              whileInView="whileInView"
            >Data structures</motion.h1>
            
            <motion.p
              variants={animation1}
              initial="initial"
              whileInView="whileInView"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, exercitationem</motion.p>
            
            <div className='lists-con'>
              <List icons={<SiWebcomponentsdotorg style={{color: 'blue'}} />} text='Project collaboration'/>
              <List icons={<SiWebcomponentsdotorg style={{color: 'blue'}} />} text='Screen-linking prototypes'/>
              <List icons={<SiWebcomponentsdotorg style={{color: 'blue'}} />} text='Wireframes amd visual mockups'/>
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