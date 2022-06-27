import { useContext, useState } from "react";
import { development_scene, githubLogo } from "../../assets";
import { UsersContext } from "../../context/context";
import { BlackContainer, Container, WhiteContainer } from "./styles";

function Home() {
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
      <WhiteContainer>
        <div>
          <img src={githubLogo} alt="github-logo" />
          <h2>Buscar Usuário</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Crie sua conta através do seu usuário do GitHub
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

export default Home;
