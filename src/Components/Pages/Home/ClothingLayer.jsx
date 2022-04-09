import { motion } from 'framer-motion'
import React, { useEffect } from 'react'


const ClothingLayer = () => {
    
   

    const animation1 = {
        hidden: { x: '100vw', rotate: -120, },
        show: { x: '-100vw',
        transition: { duration: 2, delay: 2.8}   
    }
    }

    const animation2 = {
      hidden: { x: '130vw', rotate: -120, },
      show: { x: '-100vw',
      transition: { duration: 2.2, delay: 2.85}  
    }
    }

   

  return (

    <div className="clothing-layer-con" >
        <motion.div className='cloth-cover cover1' 
            variants={animation1}
            initial="hidden"
            animate="show"
        />
          <motion.div className='cloth-cover cover2' 
            variants={animation2}
            initial="hidden"
            animate="show"
        />
       
    </div>
    

  )
  }

export default ClothingLayer

