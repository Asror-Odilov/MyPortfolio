import React, { useRef } from 'react'
import { FiGlobe } from 'react-icons/fi'
import { HiSearchCircle } from 'react-icons/hi'
import { BsFullscreenExit } from 'react-icons/bs'
import ForSvg from './ForSvg'
import { motion } from 'framer-motion'
import List from '../Content'


const WebDevelopment = () => {

  const animation = {
    initial: { y: 0, opacity: 0},
    whileInView: { y: '5vh', x: '-15vw', opacity: 1, rotation: 360,
    transition: { duration: 3}  
  }}

  const animation1 = {
    initial: {y: '10vh'},
    whileInView: {y: 0,
    transition: {duration: 0.8}
  }}
  const animation2 = {
    initial: {opacity: 0},
    whileInView: {opacity: 1,
    transition: {duration: 3}
  }}


  const myRef = useRef(null);

  return (
    <div className="web-development"
    variants={animation1}
    initial="initial"
    whileInView="whileInView"
    >
        <motion.div className="context"
          variants={animation1}
          initial="initial"
          whileInView="whileInView"  
        >
            <motion.h6>Creating websites</motion.h6>
            
            <motion.h1>Web</motion.h1> 
            
            <motion.h1>Development</motion.h1>
            
            <motion.p>Web development services help create all types of web-based 
              software and ensure great experience for web users. 
              I can professionally design, redesign and 
              continuously support customer-facing and enterprise web 
              apps to achieve high conversion and adoption rates.</motion.p>

            <List icons={<FiGlobe style={{color: 'blue'}} />} text='Modern websites'/>
            <List icons={<HiSearchCircle style={{color: 'blue'}} />} text='Search Engine Optimization'/>
            <List icons={<BsFullscreenExit style={{color: 'blue'}} />} text='Screen-scalable solutions'/>

            
        <motion.div className="circle1"
          variants={animation}
          initial="initial"
          whileInView="whileInView"
        />
        <motion.div className="square" 
          variants={animation2}
          initial="initial"
          whileInView="whileInView"
        />
        <motion.div className="square1" 
          variants={animation2}
          initial="initial"
          whileInView="whileInView"
        />
        </motion.div>
        
        <motion.div className="svg">
            <ForSvg />
        </motion.div>
    </div>
  )
}

export default WebDevelopment