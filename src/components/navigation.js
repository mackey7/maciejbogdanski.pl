import { Link } from "gatsby"
import React, { useState } from "react"
import Styled from 'styled-components'

const Wrapper = Styled.section`
    border-bottom:1px solid black;
    width:100%;
    min-height:100px;
`
const TopNavigation = Styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:0px auto;
    width:80%;
    padding:20px 0px;

  
`
const Nav = Styled.nav`
    display:${(props) => props.open ? "block" : "none"};
      width:100%;
     ul{
          width:100%;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          list-style: none;
      }
    @media (min-width: 768px) {
      display:flex;
      ul{
          display:flex;
          flex-direction:row;
          justify-content:flex-end;
    
        li{
          margin-left:10px;
        }
      }
    }
`
const LinkNav = Styled.a`
      text-decoration:none;
      color:black;
      padding:3px 10px;
      font-weight:700;
      text-transform:uppercase;
      cursor:pointer;
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
   position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;

    background:black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

@media(min-width: 768px) {

  display: none;

}
`

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const HandleClick = () => {
    open ? setOpen(false) : setOpen(true)
    console.log(open)
  }

  return (
    < Wrapper>
      <TopNavigation>
        <Hamburger onClick={HandleClick} open={open} >
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>
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

        <Nav open={open}>
          <ul>
            <li> <LinkNav href="#Projects" >Projects </LinkNav> </li>
            <li> <LinkNav href="#About" >About me </LinkNav>  </li>
            <li> <LinkNav href="#Contact" >Contact </LinkNav> </li>
          </ul>
        </Nav>

      </TopNavigation >
    </Wrapper>
  )
}

export default Navigation
