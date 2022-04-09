import React from 'react'
import Algorithms from './Algorythms/Algorythms'
import Content from './Content'
import Design from './Design/Design'
import Prototype from './Prototype/Prototype'
import './Style.css'
import WebDevelopment from './WebDevelopment/WebDevelopment'

const Skills = () => {
  return (
    <div className="skills">
        <WebDevelopment />
        <Design />
        <Prototype />
        <Algorithms />
    </div>
  )
}

export default Skills