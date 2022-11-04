import {
  createContext,
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { api } from "../../services";
import { ContextLogin, IUserTechs } from "../LoginProvider";
import { toast } from "react-toastify";

interface IModalProviderProps {
  children: ReactNode;
}

interface IContextModal {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmitCreate: SubmitHandler<FieldValues>;
  handleOutClick: (ev: Event) => void;
  modalRef: RefObject<HTMLHeadingElement>;
  deleteTech: (id: string) => void;
  isOpenModalEdit: boolean;
  setIsOpenModalEdit: Dispatch<SetStateAction<boolean>>;
  handleOutClickEdit: (ev: Event) => void;
  onSubmitEdit: SubmitHandler<FieldValues>;
  setIdEdit: Dispatch<SetStateAction<string>>;
  idEdit: string;
}

export const ContexModal = createContext<IContextModal>({} as IContextModal);

function ModalProvider({ children }: IModalProviderProps) {
  const { user, setUser, updateUser } = useContext(ContextLogin);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [idEdit, setIdEdit] = useState("");

  const modalRef = useRef<HTMLHeadingElement>(null);

  const { register, handleSubmit } = useForm();

  function handleOutClick(ev: Event) {
    if (!modalRef.current?.contains(ev.target as Node)) {
      setIsOpenModal(false);
    }
  }

  function handleOutClickEdit(ev: Event) {
    if (!modalRef.current?.contains(ev.target as Node)) {
      setIsOpenModalEdit(false);
    }
  }

  function deleteTech(id: string) {
    const token = localStorage.getItem("@kenzieHub:token");
    api
      .delete(`users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        const newTechs = user?.techs.filter((tech) => tech.id !== id);
        setUser({
          ...user,
          techs: [...newTechs],
        });
      });
  }

  function onSubmitEdit(data: FieldValues) {
    const token = localStorage.getItem("@kenzieHub:token");
    api
      .put(`users/techs/${idEdit}`, {
        ...data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async () => {
        await updateUser();
      })
      .catch(() => {
        toast.error("Ops! Algo deu errado!");
      });
    setIsOpenModalEdit(false);
  }

  function onSubmitCreate(data: FieldValues) {
    const token = localStorage.getItem("@kenzieHub:token");
    api
      .post("/users/techs/", {
        ...data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const newTech: IUserTechs = {
          id: res.data.id,
          title: res.data.title,
          status: res.data.status,
          created_at: res.data.created_at,
          updated_at: res.data.updated_at,
        };
        setUser({
          ...user,
          techs: [newTech, ...user.techs],
        });
      })
      .catch(() => {
        toast.error("Ops! Algo deu errado!");
      });
    setIsOpenModal(false);
  }

  return (
    <ContexModal.Provider
      value={{
        isOpenModal,
        setIsOpenModal,
        register,
        handleSubmit,
        onSubmitCreate,
        handleOutClick,
        modalRef,
        deleteTech,
        isOpenModalEdit,
        setIsOpenModalEdit,
        handleOutClickEdit,
        onSubmitEdit,
        setIdEdit,
        idEdit,
      }}
    >
      {children}
    </ContexModal.Provider>
  );
}

export default ModalProvider;
