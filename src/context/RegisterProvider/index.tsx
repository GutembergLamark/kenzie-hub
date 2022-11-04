import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, ReactNode } from "react";
import {
  FieldValues,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";
import { schemaRegister } from "../../validator";
import { toast } from "react-toastify";

interface IMessageError {
  message: string;
}

interface IErrorsRegister {
  name?: IMessageError;
  email?: IMessageError;
  password?: IMessageError;
  confirmPassword?: IMessageError;
  bio?: IMessageError;
  contact?: IMessageError;
  course_module?: IMessageError;
}

interface ITechResgister {
  email: string;
  password: string;
  confirmPassword?: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface IContextRegister {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  submitRegister: (data: any) => void;
  errors: IErrorsRegister;
}

interface IRegisterProvider {
  children: ReactNode;
}

export const ContextRegister = createContext<IContextRegister>(
  {} as IContextRegister
);

function RegisterProvider({ children }: IRegisterProvider) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  let navigate = useNavigate();

  function submitRegister(data: ITechResgister) {
    delete data.confirmPassword;
    api
      .post("/users", data)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Conta criada com sucesso");
          navigate("/login", { replace: true });
        }
      })
      .catch(() => {
        toast.error("Ops! Algo deu errado");
      });
  }

  return (
    <ContextRegister.Provider
      value={{ register, handleSubmit, submitRegister, errors }}
    >
      {children}
    </ContextRegister.Provider>
  );
}

export default RegisterProvider;
