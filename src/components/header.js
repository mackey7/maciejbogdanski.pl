import { Link } from "gatsby"
import React from "react"
import Styled from 'styled-components'

const HeaderWrapper = Styled.header`
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`

const Icon = Styled.a`
    padding:20px;
        img{
            height:50px;
            :hover{
                opacity:.5;
                animation-duration:1s;
            }
        }
    @media (min-width: 768px) {
        img{
            height:70px;
        }
    }
`

const TitleSection = Styled.div`
    padding:30px;
        p{
            font-size:20px;
            padding:10px;
            margin:0;

            &:nth-child(2){
                font-family: 'Roboto Slab', serif;
                font-weight:800;
                font-size:40px;
                letter-spacing: 3px;
            }
                @media (min-width: 768px) {
                    padding:20px;
                    &:nth-child(2){
                    font-size:80px;
                    }

                }
        }

`

const Header = () => (
    <HeaderWrapper>
        <TitleSection>
            <p> Hello, I`m </p>
            <p>Maciej Bogdański</p>
            <p>Junior Front-End Developer</p>
        </TitleSection>
        <div>
            <Icon href="https://www.linkedin.com/in/maciej-bogda%C5%84ski/"><img src="../images/linkedin_logo.png" /></Icon>
            <Icon href="https://github.com/mackey7"><img src="../images/github_logo.png" /></Icon>
        </div>
    </HeaderWrapper>
)


export default Header
