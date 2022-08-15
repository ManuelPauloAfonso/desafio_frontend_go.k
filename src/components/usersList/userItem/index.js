import { MdDelete } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { CgOrganisation } from "react-icons/cg";
import { FaAngleRight, FaMapMarkerAlt } from "react-icons/fa";
import { Container, DeleteContainer, UserInfoContainer } from "./styles";
import { jonhDoeAvatar } from "../../../assets";
import PropTypes from "prop-types";
import { useContext } from "react";
import { UsersContext } from "../../../context/context";
import { useState } from "react";
import { Link } from "react-router-dom";

function UserItem({ username, name, avatarUrl, company, id }) {
  const { deleteUser } = useContext(UsersContext);
  const [animationState, setAnimationState] = useState("paused");

  return (
    <Container animationState={animationState} animationName={id}>
      <UserInfoContainer>
        <div>
          <Link to={`${username}`}>
            <img src={avatarUrl ? avatarUrl : jonhDoeAvatar} alt="Avatar" />
          </Link>
          <div>
            <Link to={`${username}`}>
              <p>
                <span>{name ? name : "John Doe Santos"}</span>
                <a href="/logo">
                  <FaAngleRight color="#000000" size={24} />
                </a>
              </p>
            </Link>
            <Link to={`${username}`}>
              <strong>{username ? username : "@johndoesantos"}</strong>
            </Link>
          </div>
        </div>
        <ul>
          <li>
            <CgOrganisation color="#e5e5e5" size={16} />
            <a href="/"> {company ? company : "GO.K Digital"} </a>
          </li>
          <li>
            <FaMapMarkerAlt color="#e5e5e5" size={16} />
            <a href="/"> São Paulo Brazil</a>
          </li>
          <li>
            <AiFillStar color="#e5e5e5" size={16} /> <a href="/"> 2</a>
          </li>
        </ul>
      </UserInfoContainer>
      <DeleteContainer>
        <button
          type="button"
          onClick={() => {
            setAnimationState("running");
            setTimeout(() => deleteUser(id), 500);
          }}
        >
          <MdDelete color="#000000" size={24} />
        </button>
      </DeleteContainer>
    </Container>
  );
}

UserItem.propTypes = {
  username: PropTypes.string,
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
  company: PropTypes.string,
  id: PropTypes.number,
};

export default UserItem;
