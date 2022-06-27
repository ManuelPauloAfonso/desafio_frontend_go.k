import { fireEvent, render, screen } from "@testing-library/react";
import Home from ".";

test("there is a github logo", () => {
  render(<Home />);

  const imageGithub = screen.getByAltText("github-logo");
  expect(imageGithub).toBeInTheDocument();
});

test("there is a heading text Buscar Usuário", () => {
  render(<Home />);

  const headingText = screen.getByRole("heading", { name: "Buscar Usuário" });
  expect(headingText).toBeInTheDocument();
});

test("there is a label for username input", () => {
  render(<Home />);

  const labelInput = screen.getByLabelText(
    "Crie sua conta através do seu usuário do GitHub"
  );
  expect(labelInput).toBeInTheDocument();
});

test("there is an input for username", () => {
  render(<Home />);

  const inputUsername = screen.getByRole("searchbox", {
    name: "Crie sua conta através do seu usuário do GitHub",
  });
  expect(inputUsername).toHaveValue("");
});

test("there is a button with text cadastrar", () => {
  render(<Home />);

  const cadastrarButton = screen.getByRole("button", { name: "Cadastrar" });
  expect(cadastrarButton).toHaveStyle({
    backgroundColor: "#000000",
    color: "#ffffff",
  });
});

test("there is a link to the politicas", () => {
  render(<Home />);

  const linkPoliticas = screen.getByRole("link", { name: "política" });
  expect(linkPoliticas).toBeInTheDocument();
});

test("there is a link to the privacidade", () => {
  render(<Home />);

  const linkPrivacidade = screen.getByRole("link", { name: "privacidade" });
  expect(linkPrivacidade).toBeInTheDocument();
});

test("there is an image with alt value development-scene", () => {
  render(<Home />);

  const imageScene = screen.getByRole("img", { name: "development-scene" });
  expect(imageScene).toBeInTheDocument();
});

test("there is a heading in the second container", () => {
  render(<Home />);

  const headingText = screen.getByRole("heading", {
    name: "Gerencie e adicione tags ao seus repositórios favoritos.",
  });
  expect(headingText).toHaveStyle({
    color: "#ffffff",
    fontWeight: "400",
    fontSize: "40px",
    textAlign: "center",
  });
});

test("on focus change input styles", () => {
  render(<Home />);

  const inputUsername = screen.getByRole("searchbox", {
    name: "Crie sua conta através do seu usuário do GitHub",
  });
  fireEvent.focus(inputUsername);
  expect(inputUsername).toHaveStyle({
    boxShadow: "2px 3px 7px #d5d5d5",
  });
});

test("on mouse over the button change its color and background", () => {
  render(<Home />);

  const cadastrarButton = screen.getByRole("button", { name: "Cadastrar" });
  fireEvent.mouseOver(cadastrarButton);
  expect(cadastrarButton).toHaveStyle({
    backgroundColor: "#ffffff",
    color: "#000000",
  });
});
