import { Main } from "./styles";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <Main>
      <h1>Página não encontrada :(</h1>
      <Link className="btnBack" to="/login">
        Voltar
      </Link>
    </Main>
  );
}

export default NoPage;
