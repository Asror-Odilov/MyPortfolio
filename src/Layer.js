import React, { useEffect } from 'react'
import styled from 'styled-components'



const Layer = () => {
    
    useEffect(() => {
        const cover0 = document.querySelector('.cover0');
        
        cover0.innerHTML = "1" ? cover0.classList.add("unvisible") : null;
        
    })

  return (
      <>
    <div >
        <div className='cover0 cover1'>1
          
        </div>
        <div className='cover cover2'>
          
        </div>
        <div className='cover cover3'>
        
        </div>
          
    </div>
    
    </>
  )
}

export default Layer

