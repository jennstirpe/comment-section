import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    * {
        font-family: 'Rubik', sans-serif;
        margin: 0;
        padding: 0;
    }

    body {
        background: ${({theme}) => theme.bodyBg};
        /* height: 100vh; */
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({theme})  => theme.commentText};
    }

    h1 {
        visibility: hidden;
    }

`