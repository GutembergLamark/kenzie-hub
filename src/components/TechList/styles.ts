import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.main)`
    width: 90%;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    margin: 1.25rem auto;

    @media only screen and (min-width: 768px){
        &{
            width: 60%;
        }
    }

    .containerTech__header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .containerTech__header__title{
            color: var(--gray-0);

            font-size: 1rem;
        }

        .containerTech__header__btnAdd{          
            svg{
                color: var(--gray-0);
            }
            svg:hover{
                cursor: pointer;
            }
            
            background-color: var(--gray-3);

            padding: .5rem;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 0.25rem;
        }
    }

    .containerList{
        padding-bottom: 1.25rem;
    }

    .listTech{
        display: flex;
        flex-direction: column;
        gap: .625rem;

        background-color: var(--gray-3);

        height: 60vh;

        padding: .625rem;
        border-radius: 0.25rem;

        overflow-y: scroll;

        &::-webkit-scrollbar{
            width: 10px;
        }

        &::-webkit-scrollbar-thumb{
            width: 8px;
            background-color: var(--gray-2);
            border-radius: .25rem;
        }

        svg{
            color: var(--gray-0)
        }

        svg:hover{
            cursor: pointer;
        }

        .editTech{
            transform: translateX(60%)
        }
    }
`