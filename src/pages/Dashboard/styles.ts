import styled from 'styled-components';
import { motion } from "framer-motion"

export const Container = styled.div`    
    background-color: var(--gray-4);

    min-height: 100vh;
`

export const Header = styled(motion.header)`
    display: flex;
    flex-direction: column;
    align-items: center;
    

    .sectionLogo,.sectionUser{
        display: flex;
        justify-content: center;

        border-bottom: 2px solid var(--gray-3);
        padding: 1.25rem 0;

        width: 100%
    }

    .containerLogoBack{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        width: 90%; 

        .containerLogo__img{
            width: 6.875rem;
        }

        .containerLogoBack__back{
            padding: .75rem 1rem;
            border-radius: .25rem;
        
            background-color: var(--gray-3);
            color: var(--gray-0);
        
            text-decoration: none;
        }
    }

    @media only screen and (min-width: 768px){
        .containerLogoBack{
            width: 60%;
        }
    }


    .containerWelcomeUser{
        display: flex;
        justify-content: space-between;

        width: 90%;

        .welcomeUser{
            font-size: 1rem;
            font-weight: 700;

            color: var(--gray-0);
        }

        .courseModule{
            font-size: .75rem;
            font-weight: 400;

            color: var(--gray-1);
        }
    }

    @media only screen and (min-width: 768px){
        .containerWelcomeUser{
            width: 60%;

            .welcomeUser{
                font-size: 1.125rem;
            }
        }
    }
`;
