import React from 'react'
import Link from "gatsby-link"
import styled from 'styled-components'

const Container = styled.header`
    padding: 12px 10px 8px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    
    @media (max-width:640px) {
        flex-direction: column;
        margin: 0;
    }
`;

const Title = styled.h1`
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    color: white;
    font-size: 1.25rem;
    
    a {
      color: white;
      
      &:hover {
        color: white;
        border-bottom: 1px solid white;
      }
    }
`;

const MenuList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
`;

const MenuItem = styled.li`
    padding-left: 20px;
`;

const NavLink = styled(Link)`
    font-size: 0.75rem;
    text-transform: uppercase;
    color: white;
    text-decoration: none;
    
    &.${(props) => props.activeClassName} {
      border-bottom: 1px solid white;
      font-weight: bold;
    }
    
    &:hover {
      color: #FFC107;
      border-bottom: 1px solid #FFC107;
    }
`;

const isBlog = (match, location) => {
    return location.pathname !== '/' && location.pathname !== '/about';
}

const Header = ({title}) => (
    <Container>
        <Title><a href="/" dangerouslySetInnerHTML={{__html: title}}/></Title>
        <nav>
            <MenuList>
                <MenuItem><NavLink exact to="/" activeClassName="active">Home</NavLink></MenuItem>
                <MenuItem><NavLink to="#" isActive={isBlog} activeClassName="active">Blog</NavLink></MenuItem>
                <MenuItem><NavLink exact to="/about" activeClassName="active">About Me</NavLink></MenuItem>
            </MenuList>
        </nav>
    </Container>
);

export default Header;