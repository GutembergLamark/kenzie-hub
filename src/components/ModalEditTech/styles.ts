import styled from "styled-components";

export const ContainerModalEdit = styled.div`
    width: 100%;
    height: 100%;

    position: fixed;
    top: .625rem;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    backdrop-filter: blur(2px);

    .modalBox{
        z-index: 999;

        width: 300px;
        
        border: 1px solid var(--gray-2);
        border-radius: .25rem;
    }

    .modalBox__header{
        display: flex;
        justify-content: space-between;

        width: 100%;

        background-color: var(--gray-2);

        padding: .625rem;

        h2{
            font-size: 12px;

            color: var(--gray-0)
        }

        svg{
            color: var(--gray-0)
        }

        svg:hover{
            cursor: pointer;
        }
    }

    .modalBox__form{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        padding: 1.25rem 15px;

        width:100%;
        height: max-content;

        background-color: var(--gray-3);

        .form__label{
            color: var(--gray-0);

            font-size: 9px;
            text-align: left;
        }

        @media only screen and (min-width: 768px){
            .form__label{
                font-size: 0.75rem;
            }
        }

        .containerSelect{
            display: flex;
            align-items: center;

            border-radius: .25rem;
            padding: 0 .625rem;

            background-color: var(--gray-2);

            border: 1px solid transparent;

            select{
                padding: .625rem 0; 
            }

            select:focus{
                outline:none;
            }

        }

        .form__input{
            font-size: 14px;

            padding: .625rem;
            border: none;
            border-radius: .25rem;

            background-color: var(--gray-2);
            color: var(--gray-0);

            width:100%
        }

        input:hover{
            cursor: not-allowed
        }

        input{
            background-color: var(--gray-1)
        }

        input:focus{
            outline: 1px solid white;
        }

        .containerSelect:focus-within{
            border: 1px solid white
        }

        .form__button{
            font-size: 14px;
            padding: .75rem;
            background-color: var(--color-primary);
            color: var(--gray-0);
            border-radius: .25rem;
        }

        .form__button:hover{
            cursor: pointer;
        }
    }
`
