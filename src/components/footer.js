import React from "react"
import Styled from 'styled-components'
import { Link } from "gatsby"

const SectionWrapper = Styled.footer`
    width:100%;
    height:100%;
    background:#2b2b2d;
    color:#8e8e8e;
    padding:10px 0px;
`
const LinkNav = Styled(Link)`
      text-decoration:none;
      padding:0px 10px;  
`

const MainSection = Styled.div`
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;

    @media (min-width: 768px) {
        width: 80%;
        margin:0 auto;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items: baseline;
    }
`


const FooterSocial = Styled.ul`
    display: flex;
    list-style: none;
`
const FooterNav = Styled.nav`
ul{
    display: flex;
    list-style: none;
    li{
        a{
            color:#8e8e8e;
           :hover{
                color:#dfdfdf;
            }
        }
    }
}
`

const Footer = () => (
    <SectionWrapper>
        <MainSection>
            <span>
                &copy; 2020 by Maciej Bogdański
            </span>

            <FooterNav>
                <ul>
                    <li> <LinkNav to="/l" >Projects </LinkNav> </li>
                    <li> <LinkNav to="/2" >About me </LinkNav>  </li>
                    <li> <LinkNav to="/3" >Contact </LinkNav> </li>
                </ul>
            </FooterNav>
        </MainSection>
    </SectionWrapper>
)


export default Footer
