import { Link } from "react-router-dom";

import { useContext } from "react";
import { ContextLogin } from "../../context/LoginProvider";

import { Header, Container } from "./styles";
import TechList from "../../components/TechList";

function Dashboard() {
  const { user } = useContext(ContextLogin);

  return (
    <Container>
      <Header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <section className="sectionLogo">
          <div className="containerLogoBack">
            <figure className="containerLogo">
              <img
                className="containerLogo__img"
                src={require("../../assets/Logo.png")}
                alt=""
              />
            </figure>
            <Link
              to="/login"
              onClick={() => {
                localStorage.clear();
              }}
              className="containerLogoBack__back"
            >
              Sair
            </Link>
          </div>
        </section>
        <section className="sectionUser">
          <div className="containerWelcomeUser">
            <h1 className="welcomeUser">Olá, {user.name}</h1>
            <p className="courseModule">{user.course_module}</p>
          </div>
        </section>
      </Header>
      <TechList />
    </Container>
  );
}

export default Dashboard;
