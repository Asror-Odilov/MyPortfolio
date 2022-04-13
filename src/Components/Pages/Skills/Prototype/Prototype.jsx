import { motion } from 'framer-motion'
import React from 'react'
import List from '../Content'
import { AiFillAppstore, AiFillApi, AiFillSnippets } from 'react-icons/ai'
import { BsPaintBucket } from 'react-icons/bs'
import { ForSvg } from './ForSvg'

const Prototype = () => {

  const animation = {
    initial: {opacity: 0},
    whileInView: {opacity: 1,
    transition: {duration: 2}  
    }}

    const animation1 = {
      initial: {y: 50},
      whileInView: {y: 0,
      transition: {duration: 0.8}
    }}

  return (
    <div className="prototype">
        <motion.div className="context"
          variants={animation1}
          initial="initial"
          whileInView="whileInView"
        >
            <h6>Creating websites</h6>
            <h1>Smooth</h1> 
            <h1>Prototyping</h1>
            <p>Designers have always strived to show beautiful pictures to customers. 
              They added stylish effects to pictures, found cool photos in the 
              photo stocks, casted inconceivable shadows from the objects.</p>
            
            <div className='lists-con'>
              <List icons={<AiFillSnippets style={{color: 'blue'}} />} text='Project collaboration'/>
              <List icons={<AiFillApi style={{color: 'blue'}} />} text='Screen-linking prototypes'/>
              <List icons={<AiFillAppstore style={{color: 'blue'}} />} text='Wireframes amd visual mockups'/>
            </div>
            
            <motion.div className="circle6"
              variants={animation1}
              initial="initial"
              whileInView="whileInView"
            />
            <motion.div className="circle7" 
              variants={animation1}
              initial="initial"
              whileInView="whileInView"
            />
            <motion.div className="circle8" 
              variants={animation1}
              initial="initial"
              whileInView="whileInView"
            />  

            <motion.div className="square4" 
              variants={animation}
              initial="initial"
              whileInView="whileInView"
            />
            <motion.div className="square5" 
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

export default Prototype;