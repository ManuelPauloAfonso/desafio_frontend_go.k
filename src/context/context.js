import { createContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { octokit } from "../services/api";

const USERS_KEY = "USERS_DATA";

export const UsersContext = createContext({});

const SaveToLocalStorage = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const GetFromLocalStorage = async (key) => {
  const data = await JSON.parse(localStorage.getItem(key));

  return data;
};

const Context = ({ children }) => {
  const toastId = useRef(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
    //eslint-disable-next-line
  }, []);

  const getUsers = async () => {
    let usersData = (await GetFromLocalStorage(USERS_KEY)) || [];
    setUsers(usersData);
  };

  const saveNewUser = (newUser) => {
    setUsers([...users, newUser]);
    SaveToLocalStorage([...users, newUser], USERS_KEY);
  };

  const deleteUser = (userID) => {
    let newUsers = users.filter((item) => item.id !== userID);
    setUsers(newUsers);
    SaveToLocalStorage(newUsers, USERS_KEY);
    console.log("newUsers => ", newUsers);
  };

  const verifyIfUserExists = (username) => {
    let userExists = users.find((item) => item.login === username);
    if (userExists) return true;
    return false;
  };

  const addNewUser = async (username) => {
    if (!verifyIfUserExists(username)) {
      LoadingToast();
      await octokit
        .request("GET /users/{username}", {
          username,
        })
        .then(({ data }) => {
          LoadedToast("User Cadastrado com sucesso.", "INFO");
          saveNewUser(data);
        })
        .catch(({ error }) => {
          console.error(error);
          LoadedToast("Este username não foi encontrado.", "ERROR");
        });
    } else {
      toast.warn("Este usuário já existe.!");
    }
  };

  const LoadingToast = () =>
    (toastId.current = toast.info("Pesquisando usuario", {
      autoClose: false,
    }));

  const LoadedToast = (message, type) =>
    toast.update(toastId.current, {
      render: message,
      type: toast.TYPE[type],
      autoClose: 5000,
    });

  return (
    <>
      <UsersContext.Provider value={{ users, addNewUser, deleteUser }}>
        {children}
      </UsersContext.Provider>
    </>
  );
};

export default Context;
