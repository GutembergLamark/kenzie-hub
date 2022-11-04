import FormLogin from "../../components/FormLogin";
import { motion } from "framer-motion";

import { Main } from "./styles";

function Login() {
  return (
    <Main>
      <motion.figure
        className="containerImg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img
          className="containerImg__img"
          src={require("../../assets/Logo.png")}
          alt="Logo"
        />
      </motion.figure>
      <FormLogin />
    </Main>
  );
}

export default Login;
