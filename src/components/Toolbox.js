import React from 'react'
import styled from 'styled-components'
import ReactLogo from "../images/react.svg";
import AwsLogo from "../images/aws.svg";
import SpringLogo from "../images/spring.png";

const ToolboxContainer = styled.div`
    margin: auto;
    border-bottom: 1px solid #ccc;
    padding-bottom: 50px;
    margin-bottom: 20px;
`;

const ToolsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
    div {
      width: calc(100% / 3);
      text-align: center;
      
      img {
        max-width: 100%;
        max-height: 70px;
        display: block;
        margin: auto;
      }
    }
`;

const Toolbox = () => (
    <div>
        <h3>Area of expertise</h3>

        <ToolboxContainer>
            <ToolsList>
                <div><img src={SpringLogo} alt="Spring Framework"/></div>
                <div><img src={ReactLogo} alt="React"/></div>
                <div><img src={AwsLogo} alt="Amazon Web Services"/></div>
            </ToolsList>
        </ToolboxContainer>
    </div>
);

export default Toolbox;