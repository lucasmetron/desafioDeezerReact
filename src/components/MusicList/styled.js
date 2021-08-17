import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-content: center;
    justify-items: center;

  
`;

export const TitleList = styled.div`
    width: 100%;
    color: white;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background: rgb(164,126,246);
    background: linear-gradient(90deg, rgba(164,126,246,1) 43%, rgba(118,76,209,1) 72%, rgba(72,45,134,1) 100%);

        h2{
            font-size: 1.8rem;
        }
`;

export const Listcontainer = styled.div`
    width: 100%;
    height: 65vh;
    overflow: auto;
    
`;

export const List = styled.div`
    width: 100%;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    overflow: auto;
    
    transition: all ease .5s ;
    &:hover{
        background-color: #dcdbdc;
        transform: scale(1.01);
    }
`;


export const Item = styled.p`
    cursor: pointer;
    color: #99989B;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;

    @media(max-width: 800px) {
      font-size: 1.2rem;
  }
`;

export const ThumbNail = styled.img`
    width: 50px;
    border-radius: 50%;
`;

export const Erro = styled.h1`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 1.8rem;
`;