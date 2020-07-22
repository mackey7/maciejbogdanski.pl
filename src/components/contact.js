import React from "react"
import Styled from 'styled-components'


const SectionWrapper = Styled.footer`
    width:100%;
    height:100%;
    display: flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
   
`
const Icon = Styled.a`
margin:40px;
img{
    height:70px;
    :hover{
        opacity:.5;
    }
}
`
const H2 = Styled.h2`
letter-spacing:5px;
font-size:60px;
font-weight:900;
margin:2px;
`

const Span = Styled.span`

font-size:38px;
font-weight:900;
padding:0px 0px 50px 0px;
`


const Contact = () => (
    <SectionWrapper id="Contact">
        <H2> Let`s Talk! </H2>
        <Span> Send me a request</Span>
        <div>
            <Icon href="https://www.linkedin.com/in/maciej-bogda%C5%84ski/"><img src="../images/linkedin_logo.png" /></Icon>
            <Icon href="https://github.com/mackey7"><img src="../images/github_logo.png" /></Icon>
        </div>
    </SectionWrapper>
)


export default Contact
