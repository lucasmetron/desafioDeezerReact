import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    font-family: sans-serif;
    margin: 0;
    padding: 0;
}
`;

let fontSize = 50

const Title = styled.h3`
    font-size: ${fontSize}px;
    color: orange;

    *{
        font-family: Georgia, 'Times New Roman', Times, serif; //só vai alterar dentro tudo dentro dessa h3, para todos use o componente GlobalStyleComponent
    }

    a{
        color: inherit;
        text-decoration: none;
        &:hover{
            color: gray
        }
    }
`;

const PostCardWrapper = styled.article`
    margin: 10px;
    border: 1px solid orange;
`;


export default function Teste() {

    return (
        <PostCardWrapper>
            <GlobalStyle />
            <header>

                <Title>
                    <a rel="bookmark" href="/teste"> The Wet Codebase</a>
                </Title>
                <small> July 13, 2020 1 min read </small>

            </header>

            <p>Come waste your time with me.</p>

        </PostCardWrapper>
    );
}