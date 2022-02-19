import React from 'react'
import styled from 'styled-components'

const Button = () => {
  return (
    <div>
        <Button />
    </div>
  )
}

export default Button

const Button = styled.button`
  text-decoration: none;
  border: 3px solid yellow;
  color: transparent;
  padding: 40px 80px;
  font-size: 28px;
  font-family: sans-serif;
  letter-spacing: 5px;
  transition: all 0.5s;
  position: relative;

  &:before {
    content: "Hover Me";
    display: flex;
    justify-content: center;
    align-items: center;
    color: yellow;
    background: rgb(34, 34, 34);
    font-size: 28px;
    top: 0;
    left: 100%;
    font-family: sans-serif;
    letter-spacing: 5px;
    transition: all 1s;
    height: 100%;
    width: 100%;
    position: absolute;
    transform: scale(0) rotatey(0);
    opacity: 0;

  &:hover:before {
    transform: scale(1) rotatey(360deg);
    left: 0;
    opacity: 1;
  }
  &:after {
    content: "Hover Me";
    display: flex;
    justify-content: center;
    align-items: center;
    color: yellow;
    background: rgb(34, 34, 34);
    font-size: 28px;
    top: 0;
    left: 0;
    font-family: sans-serif;
    letter-spacing: 5px;
    transition: all 1s;
    height: 100%;
    width: 100%;
    position: absolute;
    transform: scale(1) rotatey(0);
    opacity: 1;
  }
  &:hover:after {
    transform: scale(0) rotatey(360deg);
    left: -100%;
    opacity: 0;
  }
`