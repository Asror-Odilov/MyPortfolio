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
            left: (cursorX -5) + 'px',
            top: (cursorY -5)+ 'px'
        }}>

        </CursorWrapper>
    </div>
  )
}

export default Cursor

export const CursorWrapper = styled.div`
    width: 15px;
    height: 15px;
    background: #f72424;
    border-radius: 50%;
    position: absolute;
    transition-duration: 150ms;
    z-index: 1000;
    pointer-events: none;   

    @keyframes cursorAnimation{
      from { 
        transform: scale(1);
      }
      to { 
        transform: scale(.8);
      }
    }
`