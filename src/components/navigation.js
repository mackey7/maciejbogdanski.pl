import { Link } from "gatsby"
import React from "react"
import Styled from 'styled-components'


const TopNavigation = Styled.section`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:0px auto;
    width:80%;
    padding:20px 0px;
`
const Nav = Styled.nav`
  display:none;
    @media (min-width: 768px) {
      display:block;
      ul{
        display:flex;
        list-style: none;
        li{
          margin-left:10px;
        }
      }
    }
`
const LinkNav = Styled(Link)`
      text-decoration:none;
      color:black;
      padding:3px 10px;
      font-weight:700;
      text-transform:uppercase;
      :hover{
        border:2px solid black;
        border-radius:20px;
        transition-duration: .5s;
      }
    
`
const Logo = Styled.img`
  width:50px;
  height:70px;
  border-radius:50%;
`
const LogoSection = Styled.div`
    display:none;
    @media (min-width: 768px) {
        height: 100;
          display: flex;
          align-items: center;
      }

`
const Hamburger = Styled.div`
  display:block;
    @media (min-width: 768px) {
    
          display: none;
          
      }
`
const Navigation = () => (
  <TopNavigation>
    <LogoSection >
      <Logo src="../images/Maciej_Bogdanski_logo.jpg" />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 6,
      }}>

        <span style={{
          fontWeight: 700,
        }}>
          Maciej Bogdański
      </span>
        <span>
          Junior Front-end Developer
      </span>
      </div>
    </LogoSection>
    <Hamburger>HAMBURGER</Hamburger>
    <Nav>
      <ul>
        <li> <LinkNav to="/l" >Projects </LinkNav> </li>
        <li> <LinkNav to="/2" >About me </LinkNav>  </li>
        <li> <LinkNav to="/3" >Contact </LinkNav> </li>
      </ul>


    </Nav>

  </TopNavigation >
)


export default Navigation
