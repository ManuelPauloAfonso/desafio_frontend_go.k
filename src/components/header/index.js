import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { githubLogo } from "../../assets";
import { Container } from "./styles";

function Header({ showAddLink }) {
  return (
    <>
      <Container justify={showAddLink ? "space-between" : "flex-start"}>
        <img src={githubLogo} alt="github-logo" />

        {showAddLink && <Link href="/add"> Adicionar novo </Link>}
      </Container>
    </>
  );
}

Header.propTypes = {
  showAddLink: PropTypes.bool,
};

export default Header;
