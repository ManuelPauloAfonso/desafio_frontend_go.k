import { useContext, useState } from "react";
import { development_scene, githubLogo } from "../../assets";
import { UsersContext } from "../../context/context";
import { BlackContainer, Container, WhiteContainer } from "./styles";
import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Home({ typeForm }) {
  const { addNewUser } = useContext(UsersContext);
  const [username, setUsername] = useState("");

  // "GET /users/{username}/starred"
  // "GET /search/users?q={query}{&page,per_page,sort,order}"

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      addNewUser(username);
    }
  };

  return (
    <Container>
      <WhiteContainer typeForm={typeForm}>
        {typeForm === "Add" && (
          <Link to="/">
            <AiOutlineArrowLeft color="#0f0f0f" size={26} />
          </Link>
        )}
        <div>
          <img src={githubLogo} alt="github-logo" />
          <h2>Buscar Usuário</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              {typeForm === "Cadastro"
                ? " Crie sua conta através do seu usuário do GitHub"
                : "  Adicione seus novos usuários do GitHub"}
            </label>
            <input
              type="search"
              name="username"
              id="username"
              value={username}
              onChange={handleChangeUsername}
              placeholder="@username"
            />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
        <footer>
          <p>
            Termos de <a href="/politicas">política</a> e
            <a href="/privacidade">privacidade</a>.
          </p>
        </footer>
      </WhiteContainer>
      <BlackContainer>
        <img src={development_scene} alt="development-scene" />
        <h1>Gerencie e adicione tags ao seus repositórios favoritos.</h1>
      </BlackContainer>
    </Container>
  );
}

Home.protoTypes = {
  typeForm: ProtoTypes.oneOf(["Cadastro", "Add"]),
};

export default Home;
