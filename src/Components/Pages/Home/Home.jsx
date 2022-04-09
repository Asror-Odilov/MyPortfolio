import React, {useState} from 'react'
import ClothingLayer from './ClothingLayer'
import Content from './Content'
import OpenningLayer from './OpenningLayer'
import WellcomeText from './WellcomeText'
import './Home.css';
import { motion } from 'framer-motion'




const animation = {
  hidden: { opacity: 1, y: 0},
  show: { opacity: 0, y: '-100vh',
  transition: { duration: 1}  
}}


const animation1 = {
  hidden: { },
  show: { y: '10vh',
  transition: { duration: 1}  
}}

const Home = () => {

  const [isOpen, setIsOpen] = useState(true);

  return (
 
      <motion.div className="home"
      variants={animation}
      animate={isOpen ? 'hidden' : 'show'}
      >
            <OpenningLayer />
            <WellcomeText />
            <ClothingLayer />
            <Content 
              variants={animation1}
              animate={isOpen ? 'hidden' : 'show'}
            />
            
      </motion.div>
  )
}

export default Home