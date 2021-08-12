import styled from 'styled-components'

export const Container = styled.div`
  
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    gap: 0.2rem;
    border-bottom: 1px solid #99989b34 ;

    p{
        font-size: 1.5rem;
        color: #99989B;
    }

`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const Options = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
    
    *{
        font-size: 1.5rem;
        text-decoration: none;
    }
`;


export const Teste = styled.li`
    color: #99989B;
    transition: all ease 0.5s;
    list-style: none;
    
    &:hover{
    color: #494949;
    }

`;