import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border-top: 1px solid #ccc;
    padding: 20px 0;
    text-align: center;
    
    a {
      margin: 0 0.5rem;
    }
`;

const Footer = () => (
    <Container>
        <a className="icon-twitter social-button borderless" href="http://twitter.com/maciejwalkowiak" />
        <a className="icon-github social-button borderless" href="http://github.com/maciejwalkowiak"/>
        <a className="icon-linkedin social-button borderless" href="http://twitter.com/username"/>
    </Container>
);

export default Footer;