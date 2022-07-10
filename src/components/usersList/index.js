import React from "react";
import { Container } from "./styles";
import UserItem from "./userItem";

function UsersList() {
  return (
    <Container>
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
    </Container>
  );
}

UsersList.propTypes = {};

export default UsersList;
