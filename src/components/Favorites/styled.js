import styled from "styled-components";


export const Container = styled.div`

    padding: 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;


`;

export const Title = styled.h1`
    font-size: 4rem;
    color: #07D365;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    @media(max-width: 800px) {
      font-size: 3rem;
  }
`;