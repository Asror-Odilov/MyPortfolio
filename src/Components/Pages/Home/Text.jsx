import React from 'react'
import './Home.css'
import { motion } from 'framer-motion'

const animation = {
    hidden: { opacity: 0},
    show: { opacity: 1,
    transition: { duration: 1.3, delay: 3.7}  
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