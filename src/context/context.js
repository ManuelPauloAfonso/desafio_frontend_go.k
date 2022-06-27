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

  const addNewUser = async (username) => {
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
      <UsersContext.Provider value={{ users, addNewUser }}>
        {children}
      </UsersContext.Provider>
    </>
  );
};

export default Context;
