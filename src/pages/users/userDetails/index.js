import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { octokit } from "../../../services/api";

const UserDetails = () => {
  const { username } = useParams();

  const GetAllUserInfo = async () => {
    await octokit
      .request(`/users/${username}`)
      .then((response) => console.log("User Info", response))
      .catch(({ error }) => console.error(error));

    await octokit
      .request(`/users/${username}/repos`)
      .then((response) => console.log("User Repos => ", response))
      .catch(({ error }) => console.error(error));

    await octokit
      .request(`/users/${username}/orgs`)
      .then((response) => console.log("User Orgs => ", response))
      .catch(({ error }) => console.error(error));
  };

  useEffect(() => {
    GetAllUserInfo();
  }, []);

  // "https://api.github.com/users/{user}",
  // "https://api.github.com/user/orgs",
  // "https://api.github.com/user/starred{/owner}{/repo}"
  // "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
  // "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
  return (
    <>
      <div></div>
    </>
  );
};

export default UserDetails;
