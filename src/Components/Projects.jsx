import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Projects = () => {
    return (
        <Container>
            <TitleMain>Projects</TitleMain>
            <Line />
            <TextMain>Some examples from my project repositories</TextMain>
            <Wrapper>
                <Box>
                <ImageContainer>
                    <Image1 src='./images/movie_2.png'/>    
                    <Image2 src='./images/movie.png' />
                </ImageContainer>   
                <Content>
                    <Title><span style={{color: '#008f77'}}>//</span> Mowie App</Title>
                    <Text>UI based movie application created using React (inspired by Netflix)</Text>  
                    <ButtonContainer>
                    <a href="https://github.com/Asror-Odilov/Movie-App.git" target="_blank">
                        <Button>Source Code</Button>
                    </a>
                    <a href="https://friendly-poincare-778c43.netlify.app/" target = "_blank">  
                        <Button style={{background: '#008f77', color: 'white'}}>View Demo</Button>
                    </a>
                    </ButtonContainer>
                </Content> 
                </Box>

                <BoxMiddle>
                <ContentMiddle>
                <Title><span style={{color: '#008f77'}}>//</span> Music Player</Title>
                    <Text>A single page Music player with multiple functionalities.</Text>  
                    <ButtonContainer>
                    <a href="https://github.com/Asror-Odilov/Music-Player.git" target="_blank">
                        <Button>Source Code</Button>
                    </a>
                    <a href="https://flamboyant-mahavira-e4475a.netlify.app/" target = "_blank">
                        <Button style={{background: '#008f77', color: 'white'}}>View Demo</Button>
                    </a>
                    </ButtonContainer>  
                </ContentMiddle>    
                <ImageContainerMiddle>
                    <ImageMiddle1 src='./images/music_2.png'/>
                    <ImageMiddle2 src='./images/music.png' />              
                    {/* <BackMiddle></BackMiddle>
                    <Back1Middle></Back1Middle>
                    <Back2Middle></Back2Middle> */}
                </ImageContainerMiddle>
                </BoxMiddle>

                <Box>
                <ImageContainer>
                    <Image1 src='./images/shop_2.png'/>
                    <Image2 src='./images/shop.png'/>
                </ImageContainer>
                <Content>
                <Title><span style={{color: '#008f77'}}>//</span> E-Commerce Shop</Title>
                    <Text>E-commerce clothes shop website with multiple functionalities</Text>  
                    <ButtonContainer>
                    <a href="https://github.com/Asror-Odilov/Music-Player.git" target="_blank">
                        <Button>Source Code</Button>
                    </a>
                    <a href="https://silly-hawking-021840.netlify.app/" target="_blank">
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
    ${mobile({ 
       paddingTop: '2rem',
       paddingBottom: '2rem',
       minWidth: '100%',
       background: 'linear-gradient(55deg, Transparent 70%, #14927997)',
    })}
`


const TitleMain = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
    ${mobile({ 
        fontSize: '1.7rem',
        marginLeft: '-4rem' 
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
        marginLeft: '-4rem', 
    })}
`


const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    ${mobile({ 
       gap: '4rem',
       marginTop: '5rem' 
    })}
`

const Box = styled.div`
    width: 80%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8rem;
    margin-top: -4rem;
    ${mobile({ 
       flexDirection: 'column', 
    })}

`

const ImageContainer = styled.div`
    width: 530px;
    height: 430px;
    ${mobile({ 
       width: '300px',
       height: '250px', 
       transform: `translateX(${-10}px) translateY(${0}px)`,
    })}
`

const Image1 = styled.img`
    width: 65%; 
    height: 80%;
    object-fit: cover;
    padding: 0.5rem;
    position: relative;
    box-shadow: 0px 0px 4px #222222;
    ${mobile({ 
       width: '50%',
       height: '80%',
       padding: '0.3rem',
    //    transform: `translateX(${2.8}rem) translateY(${0}rem)`, 
    })}
`      
    
const Image2 = styled.img`
    width: 85%;
    height: 55%;
    padding: 0.4rem;
    margin-top: -20rem;
    margin-left: 10rem;
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
    width: 80%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -4rem;
    ${mobile({ 
       flexDirection: 'column', 
       marginBottom: '-1rem'
    })}
`

const ImageContainerMiddle = styled.div`
    width: 430px;
    height: 430px;
    margin-right: 3rem;
    ${mobile({ 
       width: '300px',
       height: '250px', 
       transform: `translateX(${-6.8}rem) translateY(${-10}rem)`,
    })}
`


const ImageMiddle1 = styled.img`
    width: 65%; 
    height: 80%;
    object-fit: cover;
    margin-left: 15rem;
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
    width: 85%;
    height: 55%;
    color: white;
    background-color: white;
    margin-top: -16rem;
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
    margin-top: -6rem;
    margin-right: 7rem;
    ${mobile({  
       transform: `translateX(${4}rem) translateY(${20}rem)`,
    })}
`


// --------------------------------------------------------

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -6rem;
    margin-left: 4rem;
    ${mobile({ 
       transform: `translateX(${-1.4}rem) translateY(${0.5}rem)`, 
    })}
`

const Title = styled.h3`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    ${mobile({ 
       fontSize: '1.3rem',
       marginLeft: '-2rem',
       marginTop: '1rem' 
    })}
`

const Text = styled.p`
    ${mobile({ 
       width: '200px',
       fontSize: '1rem',
       marginLeft: '-3rem',
       textAlign: 'justify'
    })}
`
const ButtonContainer = styled.div`
    display: flex;
    gap: 2rem;
    ${mobile({ 
       gap: '1rem',
       transform: `translateX(${-3}rem) translateY(${0}px)`, 
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