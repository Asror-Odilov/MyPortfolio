import { motion } from 'framer-motion'
import React from 'react'
import { SiAntdesign, SiAnydesk } from 'react-icons/si'
import { AiOutlineCodeSandbox } from 'react-icons/ai'
import { ForSvg } from './ForSvg'
import List from '../Content'

const Design = () => {

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
    <div className="design">
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
            >UI/UX Design</motion.h1> 
            <motion.p
              variants={animation1}
              initial="initial"
              whileInView="whileInView"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit Ipsa, exercitationem</motion.p>
            
            <div className='lists-con'>
              <List icons={<SiAntdesign style={{color: 'blue'}} />} text='User Interface Design'/>
              <List icons={<AiOutlineCodeSandbox style={{color: 'blue'}} />} text='User Experience'/>
              <List icons={<SiAnydesk style={{color: 'blue'}} />} text='Responsive design'/>
            </div>
            <motion.div className="circle3"
              variants={animation1}
              initial="initial"
              whileInView="whileInView"
            />
            
            <div className="circle5" />  

            <motion.div className="square2" 
              variants={animation}
              initial="initial"
              whileInView="whileInView"
            />
            <motion.div className="square3" 
              variants={animation}
              initial="initial"
              whileInView="whileInView"
            />
        </motion.div>
        <motion.div className="svg">
            <ForSvg />
            <motion.img src="./img/img_bucket_4.png" alt="" className='bucket'
               variants={animation1}
               initial="initial"
               whileInView="whileInView"
            />
            <motion.img src="./img/helper_1.png" alt="" className='helper1'  
               variants={animation1}
               initial="initial"
               whileInView="whileInView"
            />
        </motion.div>
    
    </div>
  )
}

export default Design