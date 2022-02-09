import React,  { useState, useRef, useEffect }  from 'react'
import styled from 'styled-components'
import { MdOutlineLocationOn } from 'react-icons/md'
import { FiMail } from 'react-icons/fi'
import { FiPhoneCall } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from 'emailjs-com';
import { mobile } from '../responsive'
import Aos from 'aos';
import "aos/dist/aos.css";

const Contact = () => {

//   useEffect(() => {
//     Aos.init({duration: 1000})
// }, [])

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  
  const hendleChange = e => {
   setData(e.target.value)
}
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_8hslpho', 'template_4dcnle7', form.current, 'user_qaJVmFZKZBuMzaUGwtBRs')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    setData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
      info: '* Your message has been sent successfully'
    });
  };


    return (
        <Container data-aos="fade-up"
        data-aos-duration="1000">
          <Image src="./images/shape.png" alt="" />
          <Wrapper>
          <ContactInfo>
              <Circle1 />
              <Circle2 />
              <Title>Contact Info</Title>
              <Info>
                <List>
                  <span><FiMail style={{fontSize: '1.4rem', color: 'white', marginRight: '7px'}} /></span>
                  <span>asrorodilov2@gmail.com</span>
                </List>
                <List>
                  <span><FiPhoneCall style={{fontSize: '1.4rem', color: 'white', marginRight: '7px'}} /></span>
                  <span>+48 668 334 362</span>
                </List>
              </Info>
                <List>
                  <span><MdOutlineLocationOn style={{fontSize: '1.9rem', color: 'white'}}/></span>
                  <span>Nowoursynowska 139<br />
                        Warsaw, Poland<br />
                        02-776
                  </span>
                </List>


                <h3 style={{fontSize: '1.2rem', marginBottom: '-1rem', position: 'relative'}}>Find me on: </h3>
              <SocialIcons>
                <Icons>
                <a href="https://www.facebook.com/aizek.hill" traget="_blank">
                    <FaFacebook style={{fontSize: '2rem', color: 'white',}} />
                  </a>
                </Icons>
                <Icons>
                  <a href="https://instagram.com/asrorchicodilov?utm_medium=copy_link" traget="_blank">
                    <FaInstagram style={{fontSize: '2rem', color: 'white'}} />
                  </a>
                </Icons>
                <Icons>
                <a href="https://github.com/Asror-Odilov" traget="_blank">
                    <FaGithub style={{fontSize: '2rem', color: 'white'}} />
                  </a>
                </Icons>
                <Icons>
                <a href="https://www.linkedin.com/in/asror-odilov-07698a1a4" traget="_blank">
                    <FaLinkedin style={{fontSize: '2rem', color: 'white'}} />
                  </a>
                </Icons>
              </SocialIcons>
            
          </ContactInfo>

          <ContactForm ref={form} onSubmit={sendEmail}>
            <Title2 data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="1200"
                    >Send Me Message</Title2>
            <FormBox>
              <BoxLine data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="800">
              <InputBox>
                <Input type="text" name="firstname" value={data.firstName} onChange={hendleChange} required />
                <Placeholder>First Name</Placeholder>
              </InputBox>
              <InputBox>
                <Input type="text" name="lastname" value={data.lastName} onChange={hendleChange} required />
                <Placeholder>Last Name</Placeholder>
              </InputBox>
              </BoxLine >
              <BoxLine data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="1000">
              <InputBox>
                <Input type="email" name="user_email" value={data.email} onChange={hendleChange} required />
                <Placeholder>Email Address</Placeholder>
              </InputBox>
              <InputBox>
                <Input type="number" name="number" value={data.phoneNumber} onChange={hendleChange} required />
                <Placeholder>Phone Number</Placeholder>
              </InputBox>
              </BoxLine>
              <InputBox>
                <Textarea type="text" name="message" value={data.message} onChange={hendleChange} required />
                <Placeholder>Your Message...</Placeholder>
              </InputBox>
              <InputBox>
              <Button type="submit" value="Send" />
              </InputBox>
              <div style={{color: 'green', marginTop: '-1.2rem'}}>{data.info}</div>

            </FormBox>
          </ContactForm>

          {/* Contact Form For Mobile Screen */}

          
          <ContactForm1 ref={form} onSubmit={sendEmail}>
            <Title2>Contact Me </Title2>
            <FormBox>  
              <InputBox>
                <Input type="text" name="firstname" value={data.firstName} onChange={hendleChange} required />
                <Placeholder>First Name</Placeholder>
              </InputBox>
              <InputBox>
                <Input type="text" name="lastname" value={data.lastName} onChange={hendleChange} required />
                <Placeholder>Last Name</Placeholder>
              </InputBox>
              
              <InputBox>
                <Input type="email" name="user_email" value={data.email} onChange={hendleChange} required />
                <Placeholder>Email Address</Placeholder>
              </InputBox>
              <InputBox>
                <Input type="number" name="number" value={data.phoneNumber} onChange={hendleChange} required />
                <Placeholder>Phone Number</Placeholder>
              </InputBox>

              <InputBox>
                <Textarea type="text" name="message" value={data.message} onChange={hendleChange} required />
                <Placeholder>Your Message...</Placeholder>
              </InputBox>
              <InputBox>
              <Button type="submit" value="Send" />
              </InputBox>
              <div style={{color: 'green', marginTop: '-1.2rem'}}>{data.info}</div>

            </FormBox>
          </ContactForm1>

         </Wrapper> 
        </Container>
    )
}

export default Contact


const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, transparent 20%, #008b6fa7);
  ${mobile({ 
       background: 'linear-gradient(35deg, Transparent 20%, #008b6fa7)',
       paddingTop: '7rem'
    })}
`

const Image = styled.img`
  position: absolute;
  height: 200px;
  transform: translate(-204%, 80%);
  opacity: 1;
  ${mobile({ 
      display: 'none',
    })}

`

const Wrapper = styled.div`
  position: relative;
  width: 80%;
  height: 500px;
  display: flex;
  left: 3%;
  ${mobile({ 
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'auto',
    alignItems: 'center',
    left: '0',
    marginTop: '5rem'
  })}
  
  
` 

const ContactInfo = styled.div`
  position: absolute;
  top: 40px;
  width: 320px;
  height: calc(100% - 80px);
  background: #00b8a5;
  color: #fff;
  z-index: 1000;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  -webkit-box-shadow: inset 0px 0px 15px 2px #0000001a; 
        box-shadow: inset 0px 0px 15px 2px #0000001a;
  ${mobile({ 
       width: '360px',
       height: '300px',
       padding: '0.3rem',
       zIndex: '0', 
       borderRadius: '8px',
       paddingLeft: '1rem',
       transform: `translateX(${0}rem) translateY(${20}rem)`,
    })}
  
`
const Circle1 = styled.span`
  border-radius: 50%;
  background: linear-gradient(135deg, transparent 20%, #149279);
  position: absolute;
  width: 130px;
  height: 130px;
  top: 250px;
  right: 100px;
  ${mobile({  
       transform: `translateX(${0}rem) translateY(${-6}rem)`,
    })}
`
const Circle2 = styled.span`
  border-radius: 50%;
  background: linear-gradient(135deg, transparent 20%, #149279);
  position: absolute;
  width: 80px;
  height: 80px;
  top: 40px;
  right: 30px;
`

const Info = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
`
const List = styled.li`
  font-size: 0.9rem;
  display: flex;
  gap: 0.7rem;
  position: relative;
`

const Title = styled.h2`
  font-size: 2rem;
  color: #fff; 
  position: relative;
  ${mobile({
    fontSize: '1.6rem',
    textAlign: 'center'
  })}
`

const SocialIcons = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin-top: 1rem;
  padding: 1rem;
  align-items: center;
  position: relative;
  `

const Icons = styled.li`
  position: relative;
  &:hover{
    cursor: pointer;
    transition: all 1s ease-in-out;
    top: -15%;
  }
`


const ContactForm = styled.form`
  position: relative;
  background-color: #ffffff;
  width: calc(90% - 110px);
  padding-left: 13rem;
  padding-top: 2.6rem;
  margin-left: 10rem;
  -webkit-box-shadow: inset 0px 0px 25px 4px #0000002a; 
      box-shadow: inset 0px 0px 25px 4px #0000002a;
  ${mobile({ 
       display: 'none',
    })}
`

const ContactForm1 = styled.form`
    display: none;
    visibility: hidden;
    -webkit-box-shadow: inset 0px 0px 25px 4px #00000011; 
      box-shadow: inset 0px 0px 25px 4px #00000011;
  ${mobile({ 
       visibility: 'visible',
       width: '95%',
       height: '500px',
       transform: `translateX(${0}rem) translateY(${-10}rem)`,
       display: 'flex',
       flexDirection: 'column',
       position: 'relative',
       backgroundColor: '#ffffff',
       padding: '2rem',
      //  boxShadow: '1px 1px 10px gray',
       borderRadius: '0.8rem',
    })}
`


const Title2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  ${mobile({ 
      fontSize: '1.2rem',
      transform: `translateX(${0}rem) translateY(${0}rem)`,
      textAlign: 'center'
    })}
`

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${mobile({ 
      gap: '1rem'
    })}
`

const BoxLine = styled.div`
  display: flex;
  gap: 3rem;
  ${mobile({ 
      display: 'none',
    })}

`

const InputBox = styled.div`
  display: flex;
  flex-direction: column;  
  `
  
  
  const Input = styled.input`
  border: none;
  font-size: 1.1rem;
  width: 270px;
  padding: 0.3rem;
  border-bottom: 1px solid gray;
  outline: none;
  ${mobile({ 
       width: '210px',
    })}
  `
  const Textarea = styled.textarea`
    width: 90%;
    height: 120px;
    border: none;
    font-size: 1.1rem;
    border-bottom: 1px solid gray;
    outline: none;  
    padding: 0 0.3rem;
    ${mobile({ 
       width: '250x',
       height: '100px',
    })}
 ` 
const Placeholder = styled.span`
  position: absolute;
  transition: all 0.4s ease-in-out;

  ${Input}:focus ~& {
    transform: translateY(-20px);
    color: gray;
  }

  ${Input}:valid ~& {
    transform: translateY(-20px);
    color: gray;
  }

  ${Textarea}:focus ~& {
    transform: translateY(-20px);
    color: gray;
  }

  ${Textarea}:valid ~& {
    transform: translateY(-20px);
    color: gray;
  }
  ${mobile({ 
      fontSize: '0.8rem',
      width: '200px'
    })}
`

const Button = styled.input`
    width: 160px;
    height: 42px;
    margin-top: 10px;
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
}
    &:active { 
    -webkit-box-shadow: inset 0px 16px 10px 2px #00000070; 
    box-shadow: inset 0px 16px 10px 2px #00000070;
}
${mobile({
  margin: 'auto'
})}
`