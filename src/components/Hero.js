import React from 'react'
import styled, {keyframes} from 'styled-components'

const HeroContainer = styled.div`
    padding: 0 10px 30px 10px;
    line-height: 1.5rem;
        
    @media (max-width:640px) {
        flex-direction: column;
        padding: 0 10px 20px 10px;
    }
`;

const Title = styled.h1`
    line-height: 1.25em;
    color: white;
    font-style: normal;
   
    letter-spacing: 2px;
    font-weight: 600;
    font-size: 2.42857rem;
    margin: 0;
    
    @media (max-width:640px) {
        line-height: 1.25em;
        font-weight: 600;
        font-size: 2rem;
        margin: 0;
    }
`;

const Link = styled.a`
    color: #B3E5FC;
    border-bottom: 1px dotted #B3E5FC;
    font-size: 1rem;
    line-height: 1rem;
    
    &:hover {
      color: #FFC107;
      border-bottom: 1px dotted #FFC107;
    }
`;

const Hero = ({text, link}) => (
    <HeroContainer>
        <Title dangerouslySetInnerHTML={{__html: text}} />
        {link && <Link href="#">{{link}}</Link>}
    </HeroContainer>
);

export default Hero;