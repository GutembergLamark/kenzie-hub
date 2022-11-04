import styled from 'styled-components';


export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    background-color: var(--gray-4);

    padding: 50px 0;

    .menuHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 80%;
    }

    @media only screen and (min-width: 480px){
        .menuHeader{
            width: 23.75rem;
        }
    }

    .menuHeader__btnBack{
        padding: 1rem;

        text-decoration: none; 
        
        background-color: var(--gray-3);
        color: var(--gray-0);

        border-radius: 0.25rem;

        transition: all 0.5s ease-in-out;
    }

    .menuHeader__btnBack:hover{
        background-color: var(--gray-2)
    }

    .menuHeader__img{
        width: 100px
    }

    @media only screen and (min-width: 480px){
        .menuHeader__img{
            width: 10rem;
            height: 1.563rem;
        }
    }
`;
