import React from 'react'
import './Home.css'
import { motion } from 'framer-motion'

const animation = {
    hidden: { y: '-8rem', opacity: 0},
    show: { y: 0, opacity: 1,
    transition: { duration: 1.3, delay: 4.2}  
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