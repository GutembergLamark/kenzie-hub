import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .625rem;

  height: 100%;

  background-color: var(--gray-4);

  h1{
    color: var(--gray-0)
  }

  .btnBack{
    background-color: var(--gray-3);
    color: var(--gray-0);

    text-decoration: none;

    padding: .75rem;

    border-radius: .25rem;

    transition: all 0.5s ease-in-out;
  }

  .btnBack:hover{
    background-color: var(--gray-2)
  }
`;

