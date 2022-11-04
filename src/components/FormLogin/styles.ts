import styled from "styled-components";
import { motion } from "framer-motion";

interface IFormProps {
  errors: object;
}

export const Form = styled.form<IFormProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1.25rem;

  height: 75%;

  padding-bottom: 0.625rem;

  .form__containerLabel {
    display: flex;
    justify-content: space-between;
  }

  .form__title {
    font-size: 1.125rem;
    color: var(--gray-0);
  }

  .form__label {
    text-align: left;
    color: var(--gray-0);
    font-size: 0.75rem;
  }

  .container__form__input {
    background-color: var(--gray-2);

    border-radius: 0.25rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    .form__input {
      padding: 0.75rem 0;
      width: 100%;
    }

    .form__input:focus {
      outline: none;
    }

    .seePassword {
      color: var(--gray-0);
    }
  }

  .form__input {
    font-size: 1rem;

    padding: 0.75rem 1rem;

    border-radius: 0.25rem;

    background-color: var(--gray-2);
    color: var(--gray-0);
  }

  .form__input:focus {
    outline: none;
  }

  .form__button {
    padding: 0.938rem;

    border-radius: 0.25rem;

    font-size: 1rem;

    background-color: ${(data) =>
      Object.keys(data.errors).length === 0
        ? "var(--color-primary)"
        : "var(--color-primary-negative)"};
    color: var(--gray-0);

    transition: all 0.5s ease-in-out;
  }

  .form__button:hover {
    background-color: ${(data) =>
      Object.keys(data.errors).length === 0
        ? "var(--color-primary-focus)"
        : "var(--color-primary-negative)"};
    cursor: pointer;
  }
`;

export const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--gray-3);

  width: 80%;
  height: max-content;

  border-radius: 0.25rem;

  padding: 2.5rem 1.25rem;

  @media only screen and (min-width: 480px) {
    & {
      width: 23.75rem;
    }
  }

  .noAccount {
    color: var(--gray-1);

    font-size: 0.75rem;
  }

  .register {
    padding: 0.938rem;

    font-size: 1rem;

    background-color: var(--gray-1);
    color: var(--gray-0);

    border-radius: 0.25rem;

    text-decoration: none;

    transition: all 0.5s ease-in-out;
  }

  .register:hover {
    background-color: var(--gray-2);
    cursor: pointer;
  }
`;

export const Error = styled.div`
  position: relative;

  .error {
    color: red;
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

    right: 35px;

    opacity: 0;

    transition: all 0.3s ease-in-out;

    &::before {
      content: "";

      border-style: solid;
      border-width: 0px 7px 10px 7px;
      border-color: #f10 transparent;

      transform: rotate(90deg);

      position: absolute;

      top: 4px;
      right: -8px;
    }
  }
`;
