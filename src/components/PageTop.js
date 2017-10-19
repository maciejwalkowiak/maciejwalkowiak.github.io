import React from 'react'
import styled from 'styled-components'
import Header from './Header';

const Container = styled.div`
  background: linear-gradient(-45deg, #0288D1, #EB417E);
`;

const HeaderContainer = styled.div`
  max-width: 820px;
  margin: 0 auto;
`;

const PageTop = (props) => (
    <Container>
        <HeaderContainer>
            <Header title="<strong>Maciej</strong> Walkowiak"/>
            {props.children}
        </HeaderContainer>
        <svg height="50" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{display: 'block'}}>
            <polygon points="0,0 0,100 100,100" style={{fill: 'white'}}/>
        </svg>
    </Container>
);

export default PageTop;