import { useContext } from "react";
import { ContextRegister } from "../../context/RegisterProvider";
import { RiErrorWarningLine } from "react-icons/ri";

import { Error, Form } from "./styles";

function FormRegister() {
  const { register, handleSubmit, submitRegister, errors } =
    useContext(ContextRegister);

  return (
    <Form
      onSubmit={handleSubmit(submitRegister)}
      errors={errors}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="form__title">Crie sua conta</h3>
      <span className="form__description">Rápido e grátis, vamos nessa</span>

      <label className="form__label" htmlFor="name">
        Nome
      </label>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite aqui seu nome"
          id="name"
          {...register("name")}
        />
        {errors?.name && (
          <Error>
            <RiErrorWarningLine size="20" className="error" />
            <span>{errors.name.message}</span>
          </Error>
        )}
      </div>
      <label className="form__label" htmlFor="email">
        Email
      </label>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite aqui seu email"
          id="email"
          {...register("email")}
        />
        {errors?.email && (
          <Error>
            <RiErrorWarningLine size="20" className="error" />
            <span>{errors.email.message}</span>
          </Error>
        )}
      </div>
      <label className="form__label" htmlFor="password">
        Senha
      </label>

      <div className="containerInput">
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          id="password"
          {...register("password")}
        />
        {errors?.password && (
          <Error>
            <RiErrorWarningLine size="20" className="error" />
            <span>{errors.password.message}</span>
          </Error>
        )}
      </div>
      <label className="form__label" htmlFor="confirmPassword">
        Confirmar Senha
      </label>

      <div className="containerInput">
        <input
          type="password"
          placeholder="Digite novamente a sua senha"
          id="confirmPassword"
          {...register("confirmPassword")}
        />
        {errors?.confirmPassword && (
          <Error>
            <RiErrorWarningLine size="20" className="error" />
            <span>{errors.confirmPassword.message}</span>
          </Error>
        )}
      </div>
      <label className="form__label" htmlFor="bio">
        Bio
      </label>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Fale sobre você"
          id="bio"
          {...register("bio")}
        />
        {errors?.bio && (
          <Error>
            <RiErrorWarningLine size="20" className="error" />
            <span>{errors.bio.message}</span>
          </Error>
        )}
      </div>
      <label className="form__label" htmlFor="contact">
        Contato
      </label>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Opção de contato"
          id="contact"
          className="form-control cel-sp-mask"
          {...register("contact")}
        />
        {errors?.contact && (
          <Error>
            <RiErrorWarningLine size="20" className="error" />
            <span>{errors.contact.message}</span>
          </Error>
        )}
      </div>
      <label className="form__label" htmlFor="module">
        Selecionar módulo
      </label>

      <div className="containerInput">
        <select id="module" {...register("course_module")}>
          <option value="Primeiro Módulo">Módulo 1</option>
          <option value="Segundo Módulo">Módulo 2</option>
          <option value="Terceiro Módulo">Módulo 3</option>
          <option value="Quarto Módulo">Módulo 4</option>
          <option value="Quinto Módulo">Módulo 5</option>
          <option value="Sexto Módulo">Módulo 6</option>
        </select>
      </div>

      <button className="btnRegister" type="submit">
        Cadastrar
      </button>
    </Form>
  );
}

export default FormRegister;
