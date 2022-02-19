import React, { useState } from 'react'
import styled from "styled-components";

const Cursor = () => {
    const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  })
  window.addEventListener('click', () => {
    const cursor = document.querySelector('.cursor')
    cursor.classList.add('scale');
    setTimeout(() => {
      cursor.classList.remove('scale')
    }, 400)

  })
 

    

  return (
    <div>
        <CursorWrapper className="cursor"  style={{
            left: (cursorX -10) + 'px',
            top: (cursorY -10)+ 'px'
        }}>

        </CursorWrapper>
    </div>
  )
}

export default Cursor

export const CursorWrapper = styled.div`
    width: 20px;
    height: 20px;
    background: aqua;
    border: 2px solid rgba(0, 172, 143, 0.5);
    border-radius: 50%;
    position: absolute;
    transition-duration: 150ms;
    z-index: 1000;
    pointer-events: none;   

    
    &::after{
      content: " ";
      width: 20px;
      height: 20px;
      border: 8px solid teal;
      border-radius: 50%;
      position: absolute;
      opacity: 0.5;
      margin-top: -10px;
      margin-left: -10px;
      animation: cursorAnimation .8s infinite alternate;
    }
    @keyframes cursorAnimation{
      from { 
        transform: scale(1);
      }
      to { 
        transform: scale(.8);
      }
    }
    
    }
`