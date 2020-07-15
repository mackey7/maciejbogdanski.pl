import React from "react"
import Styled from 'styled-components'

const SectionWrapper = Styled.section`
border-top:2px solid #A9A9A9;
border-bottom:2px solid #A9A9A9;
padding:20px 0px; 
display:flex;
align-items: center;
justify-content: space-between;
`

const Article = Styled.article`
width:50%;
padding:20px;
`
const Img = Styled.img`
width:50%;
`

const About = () => (
    <SectionWrapper>

        <Img src="../images/maciej_bogdanski.jpg" />

        <Article>
            <h2>About me</h2>
            <h3>Who am I</h3>
            <p>

                I have accumulated web development experience for over 12 years.
                I have been able to get experiance in a variety of diffrent aspects of webmaking, including web management, web promoting, analytics, hotjar, web scrappers among other thinks. I would like to increase my expertise on front-end web developing.

            </p>
        </Article>
    </SectionWrapper>

)
export default About
