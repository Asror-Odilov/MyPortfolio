import React, {useEffect} from 'react'
import styled from 'styled-components'
import Aos from 'aos';
import "aos/dist/aos.css";
import { mobile } from '../responsive';

const Projects = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <Container>
            <Circle1 />
            <TitleMain data-aos="zoom-in" data-aos-duration="1200">Projects</TitleMain>
            <Line />
            <TextMain data-aos="zoom-in" data-aos-duration="1200">Some examples from my project repositories</TextMain>
            <Wrapper>
                
                {/* First Box */}
                <Box>
                <ImageContainer>
                    <Image1 src='./images/movie_2.png' data-aos="fade-right" data-aos-duration="1200" data-aos-delay="500"/>    
                    <Image2 src='./images/movie.png' data-aos="fade-right"  data-aos-duration="1100" />
                </ImageContainer>   
                <Content>
                    <Title data-aos="zoom-in" data-aos-duration="1200"><span style={{color: '#008f77'}}>//</span> Movie App</Title>
                    <Text data-aos="zoom-in" data-aos-duration="1200">UI based movie application created using React (inspired by Netflix)</Text>  
                    <ButtonContainer data-aos="zoom-in" data-aos-duration="1200">
                    <a href="https://github.com/Asror-Odilov/Movie-App.git" target="_blank">
                        <Button>Source Code</Button>
                    </a>
                    <a href="https://hopeful-curran-279c66.netlify.app/" target = "_blank">  
                        <Button style={{background: '#008f77', color: 'white'}}>View Demo</Button>
                    </a>
                    </ButtonContainer>
                </Content> 
                </Box>

                 {/* Second box  */}
                <BoxMiddle>
                <ContentMiddle>
                <Title data-aos="zoom-in" data-aos-duration="1200"><span style={{color: '#008f77'}}>//</span> Music Player</Title>
                    <Text data-aos="zoom-in" data-aos-duration="1200">A single page Music player with multiple functionalities.</Text>  
                    <ButtonContainer data-aos="zoom-in" data-aos-duration="1200">
                    <a href="https://github.com/Asror-Odilov/Music-Player.git" target="_blank">
                        <Button>Source Code</Button>
                    </a>
                    <a href="https://my-music-player-1.netlify.app/" target = "_blank">
                        <Button style={{background: '#008f77', color: 'white'}}>View Demo</Button>
                    </a>
                    </ButtonContainer>  
                </ContentMiddle>    
                <ImageContainerMiddle>
                    <ImageMiddle1 src='./images/music_2.png' data-aos="fade-left" data-aos-duration="1200" data-aos-delay="500" />
                    <ImageMiddle2 src='./images/music.png' data-aos="fade-left" data-aos-duration="1100" />              
                   
                </ImageContainerMiddle>
                </BoxMiddle>

                    {/* Third Box */}
                <Box style={{marginTop: '1rem'}}>
                <ImageContainer>
                    <Image1 src='./images/shop_2.png' data-aos="fade-right" data-aos-duration="1200" data-aos-delay="500"/>
                    <Image2 src='./images/shop.png' data-aos="fade-right" data-aos-duration="1100" />
                </ImageContainer>
                <Content>
                <Title data-aos="zoom-in" data-aos-duration="1200"><span style={{color: '#008f77'}}>//</span> E-Commerce Shop</Title>
                    <Text data-aos="zoom-in" data-aos-duration="1200">E-commerce clothes shop website with multiple functionalities</Text>  
                    <ButtonContainer data-aos="zoom-in" data-aos-duration="1200">
                    <a href="https://github.com/Asror-Odilov/E-Commerce-Shop.git" target="_blank">
                        <Button>Source Code</Button>
                    </a>
                    <a href="https://frosty-bhaskara-02fc03.netlify.app/" target="_blank">
                    <Button style={{background: '#009788', color: 'white'}}>View Demo</Button>
                    </a>
                    </ButtonContainer>  
                </Content>    
                </Box>
            </Wrapper>  
                
        </Container>
    )
}

export default Projects


const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 5rem;
    background: linear-gradient(25deg, transparent 70%, #14927997);
    position: relative;
    ${mobile({ 
       width: '100%',
       paddingTop: '2rem',
       paddingBottom: '2rem',
       justifyContent: 'center',
       background: 'linear-gradient(55deg, Transparent 70%, #14927997)',
    })}
`


const TitleMain = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
    ${mobile({ 
        fontSize: '1.7rem', 
    })} 
`

const TextMain = styled.p`
    font-size: 1.2rem;
    width: 35%;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 5rem;
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

const Circle1 = styled.span`
  border-radius: 50%;
  background: linear-gradient(135deg, transparent 20%, #149279);
  position: absolute;
  width: 420px;
  height: 420px;
  top: 58%;
  right: 75%;
  ${mobile({ 
      transform: `translateX(${16}rem) translateY(${-40}px)`, 
    })}
`

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    ${mobile({ 
       gap: '5rem',
       marginTop: '8rem' 
    })}
`

const Box = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: space-between;
    gap: 10rem;
    ${mobile({ 
       flexDirection: 'column', 
    })}

`

const ImageContainer = styled.div`
    width: 50%;
    height: 100%;
    ${mobile({ 
       width: '360px',
       height: '280px', 
          transform: `translateX(${3}rem) translateY(${0}rem)`, 
    })}
`

const Image1 = styled.img`
    width: 48%; 
    height: 80%;
    object-fit: cover;
    padding: 0.5rem;
    position: relative;
    left: 4rem;
    box-shadow: 0px 0px 4px #222222;
    ${mobile({ 
       width: '50%',
       height: '80%',
       padding: '0.3rem',
    })}
`      
    
const Image2 = styled.img`
    width: 65%;
    height: 55%;
    padding: 0.4rem;
    top: -17rem;
    left: 15rem;
    position: relative;
    object-fit: cover;
    background-color: white;
    box-shadow: 0px 0px 4px #222222;
    ${mobile({ 
       width: '75%',
       height: '60%',
       padding: '0.3rem', 
       transform: `translateX(${-9}rem) translateY(${3}rem)`,
    })}
`


// --------- Back Middle ----------


const BoxMiddle = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5rem;
    ${mobile({ 
        flexDirection: 'column', 
        marginTop: '-1rem'
    })}
`

const ImageContainerMiddle = styled.div`
    width: 50%;
    height: 100%;
    ${mobile({ 
       width: '360px',
       height: '280px', 
        //   transform: `translateX(${3}rem) translateY(${0}rem)`,
       transform: `translateX(${-3}rem) translateY(${-9}rem)`,
    })}
`


const ImageMiddle1 = styled.img`
    width: 48%; 
    height: 90%;
    position: relative;
    object-fit: cover;
    left: 17rem;
    padding: 0.5rem;
    background-color: white;
    box-shadow: 0px 0px 4px #222222;
    ${mobile({ 
       width: '50%',
       height: '80%',
       padding: '0.3rem',
       transform: `translateX(${-8}rem) translateY(${0}rem)`, 
    })}
`

const ImageMiddle2 = styled.img`
    width: 65%;
    height: 60%;
    color: white;
    background-color: white;
    top: -16rem;
    padding: 0.4rem;
    position: relative;
    object-fit: cover;
    box-shadow: 0px 0px 4px #222222;
    ${mobile({ 
       width: '80%',
       height: '60%',
       padding: '0.3rem', 
       transform: `translateX(${8}rem) translateY(${3.5}rem)`,
    })}
`

const ContentMiddle = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: -5rem;
    left: 5rem;
    ${mobile({  
       transform: `translateX(${4}rem) translateY(${23}rem)`,
    })}
`


// --------------------------------------------------------

const Content = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 3rem;
    width: 30%;
    ${mobile({
        width: '100%',
        height: 'auto',
        marginBottom: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
       transform: `translateX(${-1.5}rem) translateY(${0.5}rem)`, 
    })}
`

const Title = styled.h3`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    ${mobile({ 
       fontSize: '1.3rem',
       marginTop: '1rem' 
    })}
`

const Text = styled.p`
    ${mobile({ 
       width: '200px',
       fontSize: '1rem',
       textAlign: 'justify'
    })}
`
const ButtonContainer = styled.div`
    display: flex;
    gap: 2rem;
    ${mobile({ 
       gap: '1rem',
 
    })}
`

const Button = styled.button`
    width: 120px;
    height: 40px;
    margin-top: 2rem;
    border-radius: 3px;
    border: 2px solid #009788;
    font-size: 1rem;
    background-image: -webkit-linear-gradient(100deg, #009788 50%, transparent 50%);
    background-image: linear-gradient(100deg, #009788 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: all 0.9 ease-in-out;
    transition: all 0.6s ease-in-out;
    -webkit-box-shadow: inset 0px 16px 10px 2px #0000001a; 
        box-shadow: inset 0px 16px 10px 2px #0000001a;
    &:hover {
    background-position: 0;
    cursor: pointer;
    color: #fff;    
}
    &:active { 
    -webkit-box-shadow: inset 0px 16px 10px 2px #000000b0; 
    box-shadow: inset 0px 16px 10px 2px #000000b0;
}
    ${mobile({ 
       fontSize: '0.6rem',
       width: '90px',
       height: '30px',
    })}
`