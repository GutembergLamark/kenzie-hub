import { useContext, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ContexModal } from "../../context/ModalProvider";

import { ContainerModal } from "./styles";

function ModalCreateTech() {
  const {
    isOpenModal,
    setIsOpenModal,
    register,
    handleSubmit,
    onSubmitCreate,
    handleOutClick,
    modalRef,
  } = useContext(ContexModal);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [handleOutClick]);

  return (
    <ContainerModal>
      <div className="modalBox" ref={modalRef}>
        <header className="modalBox__header">
          <h2>Cadastrar Tecnologia</h2>
          <AiOutlineClose onClick={() => setIsOpenModal(!isOpenModal)} />
        </header>
        <form
          className="modalBox__form"
          onSubmit={handleSubmit(onSubmitCreate)}
        >
          <label className="form__label" htmlFor="name">
            Nome
          </label>
          <input
            className="form__input"
            type="text"
            id="name"
            placeholder="Tecnologia"
            {...register("title")}
          />

          <label className="form__label" htmlFor="status">
            Selecionar status
          </label>
          <div className="containerSelect">
            <select className="form__input" id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>

          <button className="form__button" type="submit">
            Cadastrar Tecnologia
          </button>
        </form>
      </div>
    </ContainerModal>
  );
}

export default ModalCreateTech;
