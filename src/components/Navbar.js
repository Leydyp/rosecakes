import React from 'react'
import styled from 'styled-components';
import Img from '../assets/rose.png';
import Cartwidget from './Cartwidget';

const NavContainer = styled.div`
    width: 100%;
    height: 80px;
    z-index: 20;
    background-color:#F7F3E9;
`;

const Navbarwrap = styled.div`

    width: 1200px;
    height: 100%;
    margin: 0 auto;
    z-index: 20;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;

`;
const Logo = styled.div`

    width: 150px;
    height: 70px;
    background: url(${Img}) 0 45% no-repeat;
    cursor: pointer;
`;
const Nav = styled.nav`
flex: 1;
position: relative;
padding-left: 50%;

`;
const NavLink = styled.a`
color: #49484D;
padding: 0 15px;
font-size:16px;
line-height: 80px;
font-weight: 700;
text-decoration: none;
&:hover {
    background-color: #FFBC99;
  }
  
`;


const Navbar = () => {
    return (
        <NavContainer>
            <Navbarwrap>
                <Logo/>
                <Nav>
                    <NavLink>Home</NavLink>
                    <NavLink>Nosotros</NavLink>
                    <NavLink>Productos</NavLink>
                    <NavLink>Contactanos</NavLink>
                </Nav>
                <Cartwidget/> 
            </Navbarwrap>
        </NavContainer>
    )
}

export default Navbar
