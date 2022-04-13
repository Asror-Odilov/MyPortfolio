import React, { useRef } from 'react'
import ForSvg from './ForSvg'
import { GoThreeBars } from 'react-icons/go'
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Button } from '../../Additions/Button'



const Content = (props) => {

    // Framer Motion animation
    const animation = {
        hidden: { opacity: 0},
        show: { opacity: 1,
        transition: { duration: 1.3, delay: 3.7}  
      }}

    // Animation for name
    const animation0 = {
        hidden: { opacity: 0, x: '-30rem'},
        show: { opacity: 1, x: 0,
        transition: { duration: 2, delay: 4.2 }  
      }}  
    
    //  Animation for job 
      const animation1 = {
        hidden: { opacity: 0, y: '10rem'},
        show: { opacity: 1, y: 0,
        transition: { type: 'spring', stiffnes: 50, duration: 1.6, delay: 3.9}  
      }}
    
      const animation2 = {
        hidden: { opacity: 0, y: '10rem'},
        show: { opacity: 1, y: 0,
        transition: { type: 'spring', stiffnes: 50, duration: 1.6, delay: 4.1}  
      }}

      const animation3 = {
        hidden: { opacity: 0, y: '10rem'},
        show: { opacity: 1, y: 0,
        transition: { type: 'spring', stiffnes: 50, duration: 1.6, delay: 4.3}  
      }}

      const animation4 = {
        hidden: { opacity: 0, y: '10rem'},
        show: { opacity: 1, y: 0,
        transition: { type: 'spring', stiffnes: 50, duration: 1.6, delay: 4.5}  
      }}

      // Animatiom For square rotation
      const animation5 = {
        initial: {opacity: 0},
        whileInView: {opacity: 1,
        transition: {duration: 3, }
      }}

  return (
    <motion.div className="content"
        variants={animation}
        initial="hidden"
        animate="show"
    >
        {/* Navbar */}
        <ul className="navbar">
            <li className="logo">asror</li>
           
        </ul>
        {/* Sidebar for social icons */}
        <ul className='sidebar'>
            <li className="line"></li>
                <li className="line"></li>
            <li className="line"></li>
        </ul>

        <div className="wrapper">
            <div className="name-con">
                <motion.div className="name"
                    variants={animation0}
                ><div/><h4>Asror Odilov</h4></motion.div>
                <div className="job">
                    <motion.h1 variants={animation1}> Hi, I'm Asror </motion.h1>
                    <motion.h1 variants={animation2}>Front End</motion.h1> 
                    <motion.h1 variants={animation3}>Developer and </motion.h1>
                    <motion.h1 variants={animation4}>UI/UX designer</motion.h1>
                </div>
            </div>
            <div className="img-container">
               <div className="image">
                 <img src="./img/main_6.png" alt="" />
               </div>
            </div>
        </div>
        <div className="circle" />

        <motion.div className="circle0"
          variants={animation0}
          initial="initial"
          whileInView="whileInView"
        />

      <motion.div className="square0" 
          variants={animation5}
          initial="initial"
          whileInView="whileInView"
        />
        <motion.div className="square01" 
          variants={animation5}
          initial="initial"
          whileInView="whileInView"
        />

        

    </motion.div>
  )
}

export default Content