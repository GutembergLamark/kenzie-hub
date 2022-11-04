import { useContext } from "react";
import { Link } from "react-router-dom";

import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlash } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";

import { Form, Container, Error } from "./styles";
import { ContextLogin } from "../../context/LoginProvider";

function FormLogin() {
  const { submitLogin, handleSubmit, see, setSee, register, errors } =
    useContext(ContextLogin);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Form errors={errors} onSubmit={handleSubmit(submitLogin)}>
        <h1 className="form__title">Login</h1>
        <div className="form__containerLabel">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          {errors.email && (
            <Error>
              <RiErrorWarningLine size="20" className="error" />
              <span>{errors.email.message}</span>
            </Error>
          )}
        </div>
        <input
          className="form__input"
          type="text"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <div className="form__containerLabel">
          <label className="form__label" htmlFor="password">
            Senha
          </label>
          {errors.password && (
            <Error>
              <RiErrorWarningLine size="20" className="error" />
              <span>{errors.password.message}</span>
            </Error>
          )}
        </div>
        <div className="container__form__input">
          <input
            className="form__input"
            type={see ? "text" : "password"}
            id="password"
            placeholder="Digite aqui seu nome"
            {...register("password")}
          />
          {see ? (
            <BsEyeSlash className="seePassword" onClick={() => setSee(!see)} />
          ) : (
            <IoEyeSharp className="seePassword" onClick={() => setSee(!see)} />
          )}
        </div>

        <button className="form__button" type="submit">
          Entrar
        </button>
      </Form>
      <span className="noAccount">Ainda não possui uma conta?</span>
      <Link className="register" to="/register">
        Cadastre-se
      </Link>
    </Container>
  );
}

export default FormLogin;
