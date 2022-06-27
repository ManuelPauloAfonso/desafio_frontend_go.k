import PropTypes from "prop-types";
import { githubLogo } from "../../assets";
import { Container } from "./styles";

function Header({ showAddLink }) {
  return (
    <>
      <Container justify={showAddLink ? "space-between" : "flex-start"}>
        <img src={githubLogo} alt="github-logo" />

        {showAddLink && <a href="/adicionar-usuario"> Adicionar novo </a>}
      </Container>
    </>
  );
}

Header.propTypes = {
  showAddLink: PropTypes.bool,
};

export default Header;
