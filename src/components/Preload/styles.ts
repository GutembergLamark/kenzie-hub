import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: var(--gray-4);

    display: flex;
    justify-content: center;
    align-items: center;

    .pre {
        width: 30px;
        height: 30px;

        background-color: transparent;

        border-radius: 50%;
        border: 0.4375rem solid var(--color-primary);
        border-top: 0.4375rem solid transparent;

        animation: preload 1s ease-out infinite;
    }

    @keyframes preload {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`