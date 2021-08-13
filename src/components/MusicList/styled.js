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

export const OverFlow = styled.table`
    
    width: 100%;
    height: 200px;
    overflow:hidden;
    background-color: orchid;

`;

export const ThumbNail = styled.img`
    width: 50px;
    border-radius: 50%;
`;