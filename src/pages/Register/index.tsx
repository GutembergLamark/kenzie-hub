import { Link } from "react-router-dom";
import FormRegister from "../../components/FormRegister";
import { motion } from "framer-motion";

import { Main } from "./styles";

function Register() {
  return (
    <Main>
      <motion.header
        className="menuHeader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img
          className="menuHeader__img"
          src={require("../../assets/Logo.png")}
          alt=""
        />
        <Link className="menuHeader__btnBack" to={"/login"}>
          Voltar
        </Link>
      </motion.header>

      <FormRegister />
    </Main>
  );
}

export default Register;
