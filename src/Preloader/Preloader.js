import React from 'react'
import './Style.css'

const Preloader = () => {

    const body = document.querySelector('body');

    setTimeout(function(){
        body.classList.toggle('loaded');
    
    }, 2000)
  return (
    <div>
        <div id="loader-wrapper">
        
        <div id="loader"></div>
        <div id="content">
            
        </div>
    
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
    </div>
    </div>
  )
}

export default Preloader