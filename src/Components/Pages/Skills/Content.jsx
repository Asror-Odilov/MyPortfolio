import { motion } from 'framer-motion'

export default function List({text, icons}) {

  const animation1 = {
    initial: {y: 50},
    whileInView: {y: 0,
    transition: {duration: 0.8}
  }}

  return (
    <div>
        <motion.div
              style={{display: 'flex'}}
              variants={animation1}
              initial="initial"
              whileInView="whileInView">
              <div className="con">
                {icons}
              </div>
              <span>{text}</span>
        </motion.div>
    </div>
  )
}
