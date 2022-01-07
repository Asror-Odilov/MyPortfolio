import React, { useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import styled from 'styled-components'
import { AiOutlineSlack } from 'react-icons/ai'
import Home from './Home'
import Services from './Services'
import Projects from './Projects'
import { mobile } from '../responsive'

const Navigation = () => {
    window.addEventListener("scroll", function () {
        const container = document.querySelector(".container");
        container.classList.toggle("active", window.scrollY > 0);
      });

    const scrollToHome = () => {
        window.scroll(0, 0)
    }
    const scrollToServices = () => {
        window.scroll(0, 630)
    }
    const scrollToProjects = () => {
        window.scroll(0, 1170)
    }
    const scrollToContact = () => {
        window.scroll(0, 2740)
    }

    return (
        <Container  className="container">
            <Wrapper>
                <Logo>
                    <AiOutlineSlack />
                </Logo>
                    <UlWrapper> 
                            <List onClick={scrollToHome}>
                                Home
                            </List>
                            <List onClick={scrollToServices}> 
                                Services
                            </List>
                            <List onClick={scrollToProjects}>
                                Projects
                            </List>

                    </UlWrapper>
                <Contact>
                    <Button onClick={scrollToContact}>Contact Me</Button>
                    <Button1 onClick={scrollToContact}>Hire Me</Button1>
                </Contact>    
            </Wrapper>        
        </Container>
    )
}

export default Navigation

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 90px;
    padding: 1rem 1.5rem;
    transition: 0.6s all ease;
    background: transparent;
    z-index: 1000;
    position: fixed;
    margin-bottom: 2rem;
    ${mobile({
        display: 'none' 
        // padding: '0',
        // width: '400px'
    })}
`

const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 2rem;
    gap: 25.5rem;
    ${mobile({ gap: '1rem', width: '100%'})}
`

const Logo = styled.h2`
    font-size: 3.5rem;
    margin-top: 1rem;
    color: #007c67;
    ${mobile({ 
        fontSize: '2rem', 
        marginTop: '-1rem', 
        marginLeft: '-1rem'
    })}
    
`

const UlWrapper = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 4rem;
    ${mobile({ 
        gap: '1rem',
        position: 'relative',
        left: '3rem',
    })}
    `

const List = styled.li`

    position: relative;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 4px 0; 
    ${mobile({ 
        fontSize: "0.8rem", 
        padding: '0.3rem 0',
        marginTop: '-1.4rem'


    })}
    &:hover{
        cursor: pointer;
    }
   
    &:after {
        position: absolute;
        width: 0;
        height: 3px;
        background: #007c67;
        content: "";
        opacity: 0;
        transition: all 0.4s;
    }
    &:before {
        top: 0px;
        
    }
    &:after {
        bottom: 0px;
        left: 0px;
    }
    &:hover:before,
    &:hover:after {
        opacity: 1;
        width: 100%;
        /* transform: translateY(0px); */
    }
`

const Contact = styled.div`
    display: flex;
    margin-left: -4rem;
    ${mobile({ 
        display: 'none',
    })}
`

const Button = styled.button`
    width: 120px;
    height: 35px;
    border-radius: 3px;
    color: white;
    border: none;
    font-size: 0.9rem;
    background: #009788;
    background-image: -webkit-linear-gradient(100deg, #c7c7c7 50%, transparent 50%);
    background-image: linear-gradient(100deg, #c7c7c7 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: all 0.9 ease-in-out;
    transition: all 0.6s ease-in-out;
    -webkit-box-shadow: inset 0px 10px 10px 2px #0000001a; 
        box-shadow: inset 0px 10px 10px 2px #0000001a;
    &:hover {
        background-position: 0;
        cursor: pointer;
        color: #000;    
        -webkit-box-shadow: inset 0px 16px 10px 2px #0000001a; 
        box-shadow: inset 0px 16px 10px 2px #0000001a;

    &:active { 
    -webkit-box-shadow: inset 0px 16px 10px 2px #00000070; 
    box-shadow: inset 0px 16px 10px 2px #00000070;

    ${mobile({ 
        display: 'none'
    })}
`
const Button1 = styled.button`
    background: #039788;
    border: none;
    width: 120px;
    height: 35px;
    font-size: 1rem;
    color: white;
    border-radius: 3px;
    visibility: hidden;
    ${mobile({ 
       display: 'none',
    })}
    &:hover{
        cursor: pointer;

    }
`