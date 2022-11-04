import styled from "styled-components";
import { motion } from "framer-motion";

interface IFormProps {
  errors: object;
}

export const Form = styled(motion.form)<IFormProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  background-color: var(--gray-3);

  width: 80%;
  height: max-content;

  border-radius: 0.25rem;

  padding: 1.25rem;

  @media only screen and (min-width: 480px) {
    width: 23.75rem;
  }

  .form__title {
    color: var(--gray-0);

    font-size: 1.125rem;
  }

  .form__description {
    color: var(--gray-1);

    font-size: 0.75rem;
  }

  .form__label {
    color: var(--gray-0);

    width: 100%;

    text-align: left;
    font-size: 0.75rem;
  }

  .containerInput {
    display: flex;

    width: 100%;

    padding: 0.75rem;

    background-color: var(--gray-2);

    border-radius: 0.25rem;

    input,
    select {
      width: 100%;

      border: none;

      font-size: 1rem;

      background-color: var(--gray-2);

      color: var(--gray-0);
    }

    input,
    select:focus {
      outline: none;
    }
  }

  .btnRegister {
    width: 100%;

    border-radius: 0.25rem;

    padding: 0.938rem;

    background-color: ${(data) =>
      Object.keys(data.errors).length === 0
        ? "var(--color-primary)"
        : "var(--color-primary-negative)"};
    color: var(--gray-0);

    transition: all 0.5s ease-in-out;
  }

  .btnRegister:hover {
    background-color: ${(data) =>
      Object.keys(data.errors).length === 0
        ? "var(--color-primary-focus)"
        : "var(--color-primary-negative)"};
    cursor: pointer;
  }
`;

export const Error = styled.div`
  position: relative;

  .error {
    color: #f10;
  }

  &:hover span {
    opacity: 1;
  }

  span {
    position: absolute;

    padding: 10px;
    border-radius: 0.25rem;

    width: fit-content;

    text-align: center;
    white-space: nowrap;

    background-color: #f10;
    color: var(--gray-0);

    bottom: 35px;
    right: -5px;

    opacity: 0;

    transition: all 0.3s ease-in-out;

    &::before {
      content: "";

      border-style: solid;
      border-width: 10px 7px 0 7px;
      border-color: #f10 transparent;

      position: absolute;

      bottom: -8px;
      right: 8px;
    }
  }
`;
