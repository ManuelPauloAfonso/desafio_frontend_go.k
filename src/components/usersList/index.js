import { useContext } from "react";
import { UsersContext } from "../../context/context";
import { Container } from "./styles";
import UserItem from "./userItem";

function UsersList() {
  const { users } = useContext(UsersContext);

  return (
    <Container>
      {users &&
        users.map((item, index) => (
          <UserItem
            username={item.login}
            name={item.name}
            avatarUrl={item.avatar_url}
            company={item.company}
            key={index}
            id={item.id}
          />
        ))}
    </Container>
  );
}

UsersList.propTypes = {};

export default UsersList;
