import styled, { keyframes } from "styled-components";

const aparece = keyframes`
 from {
    opacity:0
  }

  to {
    opacity:1
  }
`;

export const Alert = styled.div`
position: fixed;
bottom: 0px;
bottom: 1rem;
width: 100%;
display:flex;
align-items: center;
justify-content: center;

color: white;
`;

export const AlertMessage = styled.div`
    width: 50%;
    background-color: #07D365;
    padding: 0.5rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    animation-name: ${aparece};
    animation-duration: 1s;
    animation-direction: alternate-reverse

`;