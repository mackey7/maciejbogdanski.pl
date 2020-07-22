import { Link } from "gatsby"
import React from "react"
import Styled from 'styled-components'

const SectionWrapper = Styled.section`
border-top:2px solid #A9A9A9;
border-bottom:2px solid #A9A9A9;
padding:20px 0px; 
display:flex;
flex-wrap:wrap;
align-items: center;
justify-content: center;
`

const ProjectBox = Styled.figure`
width:270px;
height:200px;
border:2px solid grey;
border-radius:4px;
margin:10px;
display:flex;
flex-direction:column;
align-content:space-between;
position:relative;
.box {
    display:none;
    position:absolute;
    top:0;
    left:0;
     color:white;
    a{
        color:white;
        text-decoration:none;
    }
}
 &:hover .box {
width:100%;
height:100%;
    display: flex;
    flex-direction:column;
  align-items: center;
  justify-content: center;
background-color:rgba(0,0,0,0.7);
  
}
  }

`
const ProjectBoxImage = Styled.img`
height:100%;
width:100%;
`

const ProjectBoxTitle = Styled.figcaption`

`



const Projects = () => (
    <SectionWrapper id="Projects">
        <ProjectBox >
            <div className="box">
                <a href="">Web</a>
                <a href="">Web</a>
                <a href="">kod</a>
            </div>
            <ProjectBoxImage src="../images/project.png" />
            <ProjectBoxTitle>
                My Project
            </ProjectBoxTitle>

        </ProjectBox >
        <ProjectBox >
            <div className="box">
                <a href="">Web</a>
                <a href="">Web</a>
                <a href="">kod</a>
            </div>
            <ProjectBoxImage src="../images/project.png" />
            <ProjectBoxTitle>
                My Project
            </ProjectBoxTitle> </ProjectBox >
        <ProjectBox >
            <div className="box">
                <a href="">Web</a>
                <a href="">Web</a>
                <a href="">kod</a>
            </div>
            <ProjectBoxImage src="../images/project.png" />
            <ProjectBoxTitle>
                My Project
            </ProjectBoxTitle> </ProjectBox >
    </SectionWrapper >
)


export default Projects
