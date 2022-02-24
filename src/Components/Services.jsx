import React, {useEffect} from 'react'
import styled from 'styled-components'
import {SiAntdesign} from 'react-icons/si' 
import { mobile } from '../responsive'
import { FaAccusoft, FaLaptopCode } from 'react-icons/fa'
import Aos from 'aos';
import "aos/dist/aos.css";

const Services = () => {
    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])

    return (
        <Container>
            <Title data-aos="zoom-in" data-aos-duration="1200">Services</Title>
            <Line />
            <Text data-aos="zoom-in" data-aos-duration="1200">Front End development services to endeavor your business to a high level.</Text>
            <Circle1 />
              <Circle2 />
              <Image src="./images/shape copy.png" alt="" />
            <Wrapper>
                <Box data-aos="fade-up"
                     data-aos-anchor-placement="center-bottom"
                     data-aos-delay="100">
                    <Icon>
                        <FaLaptopCode />
                    </Icon>
                    <BoxTitle>Website Development</BoxTitle>
                    <BoxText>Building responsive websites, one-pager – landing page 
                        for marketing campaigns, or mobile and user-friendly websites.</BoxText>
                </Box>

                <Box data-aos="fade-up"
                     data-aos-anchor-placement="center-bottom"
                     data-aos-duration="600">
                    <Icon>
                    <SiAntdesign />
                    </Icon>
                    <BoxTitle>UI/UX Design</BoxTitle>
                    <BoxText>Pushing brands to define their image with UI design and make an enduring 
                        impact that drives users with UX design services.</BoxText>
                </Box>

                <Box data-aos="fade-up"
                     data-aos-anchor-placement="center-bottom"
                     data-aos-duration="1000"
                     data-aos-delay="100">
                    <Icon>
                        <FaAccusoft style={{fontSize: "3.1rem" }} />
                    </Icon>
                    <BoxTitle>Web App Development</BoxTitle>
                    <BoxText>Develop an innovative, functional, fast, and reliable 
                        web applications that builds loyalty and trust with users.
                    </BoxText>
                </Box>

            </Wrapper>
        </Container>
    )
}

export default Services

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    margin-top: 3rem;
    background-color: #e4e4e4;
    background: linear-gradient(100deg, transparent 70%, #e4e4e4);
    overflow: hidden;
    position: relative;
    ${mobile({ 
        marginTop: '5rem',
        height: 'auto',
        padding: '5rem', 
    })}
`
const Image = styled.img`
  position: absolute;
  object-fit: cover;
  height: 260px;
  width: 160px;
  transform: translate(358%, 85%);
  opacity: 0.3;
`

const Title = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1rem;    
    ${mobile({ 
        fontSize: '1.7rem',
        
    })}
`
const Text = styled.p`
    font-size: 1.2rem;
    margin-bottom: 3rem;
    margin-top: 1rem;
    width: 35%;
    text-align: center;
    ${mobile({ 
       display: 'none', 
    })}
`

const Line = styled.hr`
    width: 300px;
    height: 4px; 
    background: #009788; 
    margin-top: -0.5rem;
    ${mobile({ 
        width: '150px',
        
    })}
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.2rem;
    ${mobile({ 
        flexDirection: 'column',
        transform: `translateX(${0}) translateY(${40}px)`, 
    })}
`

const Icon = styled.div`
    font-size: 2.5rem;
    ${mobile({ 
        fontSize: '2rem', 
    })}
`

const Box = styled.div`
    width: 350px;
    height: 240px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    border-radius: 5px;
    box-shadow: inset 0px 0px 10px #00583679;
    transition: all 0.4s ease-in-out;
    position: relative;
    &:hover{
        cursor: pointer;
    }
    ${mobile({ 
        width: '320px',
        fontSize: '12px',
        textAlign: 'center',
        padding: '1rem'
    })}
`
const Circle1 = styled.span`
  border-radius: 50%;
  background: linear-gradient(135deg, transparent 20%, #149279);
  position: absolute;
  width: 190px;
  height: 190px;
  top: 60%;
  right: 85%;
  ${mobile({ 
      transform: `translateX(${16}rem) translateY(${-40}px)`, 
    })}
`
const Circle2 = styled.span`
  border-radius: 50%;
  background: linear-gradient(-75deg, transparent 10%, #149279);
  position: absolute;
  width: 140px;
  height: 140px;
  top: 10%;
  right: 60%;
  ${mobile({ 
        width: '320px',
        height: '230px',
        flexDirection: 'column',
        transform: `translateX(${-20}px) translateY(${-60}px)`, 
    })}
`

const BoxTitle = styled.h4`
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 1rem;
    position: relative;
    ${mobile({ 
        fontSize: '1rem', 
    })}
`

const BoxText = styled.p`
    text-align: center;
    position: relative;
    font-size: 0.9rem;
`