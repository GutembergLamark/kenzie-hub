import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FieldValues,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { schemaLogin } from "../../validator";
import { yupResolver } from "@hookform/resolvers/yup";

interface IDataUser {
  email: string;
  pasword: string;
}

interface ILoginProviderProps {
  children: ReactNode;
}

export interface IUserTechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface IUser {
  avatar_url: null;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: IUserTechs[];
  updated_at: string;
  works: [];
}

interface IMessageError {
  message: string;
}

interface IErrorsLogin {
  email?: IMessageError;
  password?: IMessageError;
}

interface IContextLogin {
  submitLogin: (data: any) => void;
  user: IUser;
  loading: boolean;
  setUser: Dispatch<SetStateAction<IUser>>;
  updateUser: () => Promise<void>;
  see: boolean;
  setSee: Dispatch<SetStateAction<boolean>>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  errors: IErrorsLogin;
}

export const ContextLogin = createContext<IContextLogin>({} as IContextLogin);

function LoginProvider({ children }: ILoginProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const [see, setSee] = useState(false);
  const [click, setClick] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  async function updateUser() {
    const token = localStorage.getItem("@kenzieHub:token");

    if (token) {
      try {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const { data } = await api.get("/profile");
        setUser(data);
      } catch (error) {
        toast.error("Ops! Algo deu errado");
      }
    }
  }

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@kenzieHub:token");

      if (token) {
        try {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          setUser(data);
        } catch (error) {
          toast.error("Ops! Algo deu errado");
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  const navigate = useNavigate();

  function submitLogin(data: IDataUser) {
    api
      .post("/sessions", data)
      .then(({ data: { user: userResponse, token } }) => {
        localStorage.setItem("@kenzieHub:token", token);

        setUser(userResponse);

        navigate("/dashboard", { replace: true });
      })
      .catch(() => {
        toast.error("Usuário ou senha incorretos!");
      });
  }

  return (
    <ContextLogin.Provider
      value={{
        submitLogin,
        user,
        loading,
        setUser,
        updateUser,
        see,
        setSee,
        handleSubmit,
        register,
        errors,
      }}
    >
      {children}
    </ContextLogin.Provider>
  );
}

export default LoginProvider;
