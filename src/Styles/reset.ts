import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    
    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --gray-4: #121214;
        --gray-3: #212529;
        --gray-2: #343B41;
        --gray-1: #868E96;
        --gray-0: #F8F9FA;

        --sucess: #3FE864;
        --negative: #E83F5B;
    }
    
    body, div, input, label, form, span, h1, h2, p, button, figure, main, header, ul{
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    ul,ol{
        list-style: none;
    }
`