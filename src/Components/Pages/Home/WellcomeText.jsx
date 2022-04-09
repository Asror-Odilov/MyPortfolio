import React from 'react'
import { motion } from 'framer-motion'

const WellcomeText = () => {

    const animation = {
        show: { opacity: 1,
        transition: { duration: 0.1 }  
      }
      }

    const animation1 = {
        hidden: { x: '0'},
        show: { x: '100vw',
        transition: { duration: 8 }  
      }
      }
  
      const animation2 = {
        hidden: { x: '0'},
        show: { x: '-100vw',
        transition: { duration: 8 }  
      }
      }

    //   Animation for text
      const animation3 = {
        hidden: { y: '90vh'},
        show: { y: '0',
        transition: { duration: 1.5, delay: 1.1}  
      }
      }

  return (
    <motion.div className='wellcome-con'
       animate={{opacity: 0}}
       transition={{delay: 3.8}}
    >

        <div className="wellcome-wrap">
            <motion.span
                 variants={animation1}
                 initial="hidden"
                 animate="show"
            >CODING WEB DEVELOPMENT UI/UI DESIGN MOBILE APPLICATION</motion.span>

            <motion.span
                variants={animation2}
                initial="hidden"
                animate="show"
            >CODING WEB DEVELOPMENT UI/UI DESIGN MOBILE APPLICATION</motion.span>

            <motion.span
                 variants={animation1}
                 initial="hidden"
                 animate="show"
            >CODING UI/UI DESIGN WEB DEVELOPMENT MOBILE APPLICATION</motion.span>
        </div>
        

        {/* Animation for wellcome text */}

        <div className="wellcome-text">
            <motion.span className="main"
                variants={animation3}
                initial="hidden"
                animate="show"
            >Welcome</motion.span>

            <motion.span className='loading'
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                transition={{delay: 2 }}

            >Welcome</motion.span>
            
            <motion.span className='loading'
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                transition={{delay: 1.8}}
            >Welcome</motion.span>

            <motion.span className='loading'
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                transition={{delay: 1.7}}
            >Welcome</motion.span>

            <motion.span className='loading'
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                transition={{delay: 1.7}}
            >Welcome</motion.span>

            <motion.span className='loading'
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                transition={{delay: 1.5}}
            >Welcome</motion.span>
        </div>
    </motion.div>
  )
}

export default WellcomeText