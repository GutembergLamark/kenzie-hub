import { useContext, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ContextLogin } from "../../context/LoginProvider";

import { ContexModal } from "../../context/ModalProvider";

import { ContainerModalEdit } from "./styles";

function ModalEditTech() {
  const {
    setIsOpenModalEdit,
    isOpenModalEdit,
    modalRef,
    handleSubmit,
    register,
    handleOutClickEdit,
    onSubmitEdit,
    idEdit,
  } = useContext(ContexModal);

  const { user } = useContext(ContextLogin);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutClickEdit);

    return () => {
      document.removeEventListener("mousedown", handleOutClickEdit);
    };
  }, [handleOutClickEdit]);

  const tech = user.techs.filter((tech) => tech.id === idEdit);

  return (
    <ContainerModalEdit>
      <div className="modalBox" ref={modalRef}>
        <header className="modalBox__header">
          <h2>Tecnologia Detalhes</h2>
          <AiOutlineClose
            onClick={() => setIsOpenModalEdit(!isOpenModalEdit)}
          />
        </header>
        <form className="modalBox__form" onSubmit={handleSubmit(onSubmitEdit)}>
          <label className="form__label" htmlFor="name">
            Nome do projeto
          </label>
          <input
            className="form__input"
            disabled={true}
            type="text"
            id="name"
            placeholder="Tecnologia"
            value={tech[0].title}
          />

          <label className="form__label" htmlFor="status">
            Status
          </label>
          <div className="containerSelect">
            <select
              className="form__input"
              id="status"
              defaultValue={"Iniciante"}
              {...register("status")}
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>

          <button className="form__button" type="submit">
            Salvar alterações
          </button>
        </form>
      </div>
    </ContainerModalEdit>
  );
}

export default ModalEditTech;
