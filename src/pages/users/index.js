import React from "react";
import { Header } from "../../components";
import UsersList from "../../components/usersList";
import { Container, ContainerUsers } from "./styles";

function Users() {
  return (
    <>
      <Header showAddLink={true} />
      <Container>
        <ContainerUsers>
          <UsersList />
        </ContainerUsers>
      </Container>
    </>
  );
}

export default Users;
