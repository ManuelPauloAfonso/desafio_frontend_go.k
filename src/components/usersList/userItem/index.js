import { MdDelete } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { CgOrganisation } from "react-icons/cg";
import { FaAngleRight, FaMapMarkerAlt } from "react-icons/fa";
import { Container, DeleteContainer, UserInfoContainer } from "./styles";
import { jonhDoeAvatar } from "../../../assets";

function UserItem() {
  return (
    <Container>
      <UserInfoContainer>
        <div>
          <img src={jonhDoeAvatar} alt="Avatar" />
          <div>
            <p>
              <span>John Doe Santos</span>
              <a href="/logo">
                <FaAngleRight color="#000000" size={24} />
              </a>
            </p>
            <strong>@johndoesantos</strong>
          </div>
        </div>
        <ul>
          <li>
            <CgOrganisation color="#e5e5e5" size={16} />
            <a href="/"> GO.K Digital</a>
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
        <button type="button">
          <MdDelete color="#000000" size={24} />
        </button>
      </DeleteContainer>
    </Container>
  );
}

UserItem.propTypes = {};

export default UserItem;
