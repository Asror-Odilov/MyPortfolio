import React from 'react'
import './Home.css'
import { motion } from 'framer-motion'

const animation = {
    hidden: { y: '-30vw'},
    show: { y: 0,
    transition: { duration: 0.5, delay: 4.4}  
  }}

const Text = () => {
  return (
    <motion.div className='text'
        variants={animation}
        initial="hidden"
        animate="show"
    >
        <h1>Warning!</h1>
        <p>Portfolio and projects inside the portfolio have not finished yet or during the procces of update</p>

    </motion.div>
  )
}

export default Text