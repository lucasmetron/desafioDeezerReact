import styled from 'styled-components'

export const MyTable = styled.table`
    
    *{
        font-size: 1.5rem;
        text-align: center;
        overflow: auto;
        color: #99989B;
    }
    width: 100%;
    max-height: 200px;
    overflow: auto;


    tr{
        transition: all ease 0.5s;
        

        &:hover{
            background-color: #e7e7e7;
        }
    }

    th{
        position: sticky;
        top:0;
        padding: 0.8rem;
        z-index: 2;
        background-color: #8257E5;
        color: white;
        
    }

    td{
        padding: 0.8rem;
        cursor: pointer;
       
    }
  
    `;
export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-content: center;
    justify-items: center;
    *{
        font-size: 1.8rem;
    }
   
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

   
`;

export const ThumbNail = styled.img`
    width: 50px;
    border-radius: 50%;
`;

export const Erro = styled.h1`
    width: 100%;
    display: flex;
    justify-content: center;
`;