import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Home = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <>
            <Container>
                <BigCircle />
                <Wrapper>
                <Content>
                    <Title>Hello!</Title>
                    <Name><Name1>I'm</Name1> <Name2 style={{color: '#006454'}}>Asror Odilov</Name2></Name>
                    <Text><Stick>//</Stick> Front End Developer & UI/UX designer</Text>
                    <Button onClick={handleOpen}>Resume</Button>
                </Content>
                <ImageContainer>
                    <Image src='./images/mine_1.jpg'/>
                    <Back></Back>
                    <Back1></Back1>
                    <Back2></Back2>
                    <About>
                        <h2>About Me</h2>
                        <p style={{fontSize: '0.9rem', textAlign: 'justify'}}> 
                        Entry level Front End Developer aiming to obtain strong developing skills and experience 
                        in professional programming across multiple areas of attended company. </p>
                    </About>              
                </ImageContainer>
                </Wrapper>

                    <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <ResumeContainer src="./CV/Asror Odilov Resume.pdf" width="1200px" height="600px"/>
                        </Typography>
                        </Box>
                    </Modal>
                    </div>
                );


            </Container>
        </>
    )
}

export default Home


const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    ${mobile({ 
       width: '100%',
       height: '100%',
       marginBottom: '-2rem',
       paddingTop: '2rem',
    })}
`
const BigCircle = styled.span`
position: absolute;
width: 300px;
height: 300px;
border-radius: 50%;
background: linear-gradient(to bottom, #1cd4af, #3eb39b);
box-shadow: 0 0 1.5px gray;
transform: translate(-25%, -40%);
${mobile({ 
    display: 'none', 
})}

&:after {
  content: "";
  width: 210px;
  position: absolute;
    height: 210px;
    background: white;
    border-radius: 50%;
    top: calc(50% - 110px);
    left: calc(50% - 110px);
  }
  `

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    margin-left: 10rem;
    ${mobile({ flexDirection: 'column', gap: '0', margin: '0', padding: '1rem' })}

`

const ResumeContainer = styled.embed`
    width: 820px;
    height: 700px;
    position: relative;
    top: -0.5rem;
    left: -15rem;
    ${mobile({ 
       
        display: 'none',

    })}
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin-top: 10rem;
    ${mobile({
        transform: `translateX(${130}px) translateY(${110}px)`,
        alignItems: 'center',
        justifyContent: 'center'
    })}
`

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    ${mobile({
        display: 'none',
    })}
`
const Name = styled.h2`
    display: flex;
    gap: 13px;
    align-items: center;
    ${mobile({
       fontSize: '0.6rem',
       marginLeft: '-15rem',
    })}
`
const Name1 = styled.span`
    font-size: 2.5rem;
    font-weight: 700;
    ${mobile({
        display: 'none',
    })}
`

const Name2 = styled.span`
    font-size: 2.5rem;
    font-weight: 700;
    ${mobile({
        fontSize: '1.5rem',
    })}
`

const Text = styled.h4`
    font-size: 1.8rem;
    ${mobile({
        fontSize: '1.3rem',
        width: '200px',
        marginLeft: '-15rem',
        textAlign: 'center'
    })}
`

const Stick = styled.span`
    color: #008f77; 
    font-weight: bold;
    ${mobile({ display: 'none'})}
`

const ImageContainer = styled.div`
    width: 500px;
    height: 400px;
    margin-top: 8rem;
    position: relative;
    ${mobile({ 
        height: '200px',
        width: '250px', 
        transform: `translateX(${2}rem) translateY(${-28}rem)`
    })}
`

const Image = styled.img`
    width: 80%; 
    height: 100%;
    object-fit: cover;
    padding: 0.6rem;
    background-color: white;
    box-shadow: 2px 6px 20px #0000003d;
    ${mobile({
        borderRadius: '50%'
    })}
`      
    
const About = styled.div`
    background: #02ac9b;
    width: 340px;
    height: 220px;
    padding: 2rem;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    top: 2rem;
    left: -10rem;
    position: relative;
    -webkit-box-shadow: inset 0px 16px 15px 2px #00000013; 
    box-shadow: inset 0px 16px 15px 2px #00000013;
    ${mobile({ 
        transform: `translateX(${6}rem) translateY(${8}rem)`,
        width: '320px',
        height: '230px',
        textAlign: 'justify',
        borderRadius: '10px',
        fontSize: '0.8rem',
        margin: '8rem 0', 
        textAlign: 'center'
    })}
`


const Back = styled.div`
    width: 80%;
    height: 25%;
    margin-top: -10rem;
    margin-left: 2.7rem;
    background:  #e6e6e6;
    ${mobile({ display: 'none'})}
    
`

const Back1 = styled.div`
    width: 80%;
    height: 10%;
    margin-top: -18rem;
    margin-left: 2rem;
    background:  #e6e6e6;
    ${mobile({ display: 'none'})}
`   

const Back2 = styled.div`
    width: 80%;
    height: 40%;
    margin-left: -3rem;
    background: #d6d6d6;
    ${mobile({ display: 'none'})}
`   
const Button = styled.button`
    width: 160px;
    height: 45px;
    margin-top: 2rem;
    border-radius: 3px;
    color: white;
    border: none;
    font-size: 1.2rem;
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
}
    ${mobile({ 
        width: '80px',
        height: '25px',
        fontSize: '0.7rem',
        marginBottom: '1rem',
        transform: `translateX(${-80}px) translateY(${-20}px)`
    })}
`