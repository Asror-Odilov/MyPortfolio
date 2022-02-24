import React from 'react'
import styled from 'styled-components'

const Skills = () => {
  return (
    <Container>
        <TitleMain>Skills</TitleMain>
        <Line />
        <MainWrapper>
        <Wrapper>
            <Title><span style={{color: '#008f77', marginRight: '0.5rem',}}>//</span>HTML & CSS</Title>
            <SkillsCon>
                <Skill> 
                    <Char style={{ background: '#069e78', width: '250px' }}
                    /><Name>HTML</Name> 
                </Skill>
                <Skill> 
                    <Char style={{ background: '#069e78', width: '230px' }}
                    /><Name>CSS</Name> 
                </Skill>
                <Skill> 
                    <Char style={{ background: '#069e78', width: '210px' }}/><Name>Bootstrap</Name> 
                </Skill>
                <Skill> 
                    <Char style={{ background: '#069e78', width: '190px' }}
                    /><Name>Sass</Name> 
                </Skill>
                <Skill> 
                    <Char style={{ background: '#069e78', width: '180px' }}
                    /><Name>Styled Components</Name> 
                </Skill>
            </SkillsCon>
        </Wrapper>
        <Wrapper>
            <Title> <span style={{color: '#008f77', marginRight: '0.5rem',}}>//</span>JavaScript</Title>
            <SkillsCon>
                <Skill> <Char style={{ background: 'teal', width: '250px' }}
                    /><Name>JavaScript</Name> </Skill>
                <Skill> <Char style={{ background: 'teal', width: '230px' }}
                    /><Name>React.js</Name> </Skill>
                <Skill> <Char style={{ background: 'teal', width: '200px' }}
                    /><Name>TypeScript</Name> </Skill>
            </SkillsCon>
        </Wrapper>
        <Wrapper>
            <Title><span style={{color: '#008f77', marginRight: '0.5rem',}}>//</span>Externals</Title>
            <SkillsCon>
                <Skill> <Char style={{ background: '#0961c5', width: '250px' }}
                    /><Name>Material UI</Name> </Skill>
                <Skill> <Char style={{ background: '#0961c5', width: '230px' }}
                    /><Name>FireBase</Name> </Skill>
                <Skill> <Char style={{ background: '#0961c5', width: '210px' }}
                    /><Name>Firgma</Name> </Skill>
                <Skill> <Char style={{ background: '#0961c5', width: '190px' }}
                    /><Name>Git</Name> </Skill>
                
            </SkillsCon>
        </Wrapper>
        </MainWrapper>
    </Container>
  )
}

export default Skills

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5rem;
    /* background: linear-gradient(-120deg, transparent 70%, #f0efef); */
`
const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    margin-left: 3rem;
`
const Wrapper = styled.div`
    height: auto;
 
`

const TitleMain = styled.h2`
    font-size: 2.5rem;
`


const Line = styled.hr`
    width: 300px;
    height: 4px; 
    background: #009788; 
    margin-top: 1rem;
`

const Title = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
`

const SkillsCon = styled.div`
    width: 420px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Skill = styled.div`
    width: 85%;
    display: flex;
    gap: 3rem;
    align-items: center;
`
const Char = styled.span`
    width: 250px;
    height: 28px;
    border-radius: 5px; 
    margin-bottom: 0.9rem;
    background-color: teal;

`

const Name = styled.span`
    font-size: 0.7rem;
    margin-top: -0.5rem;
`