import { render, screen } from "@testing-library/react";
import Header from ".";

test("it should render the header correctly", () => {
  render(<Header />);
  const githublogo = screen.getByRole("img", { name: "github-logo" });
  expect(githublogo).toBeInTheDocument();
});

test("it should render Add New User Link", () => {
  render(<Header showAddLink={true} />);

  const addButton = screen.getByRole("link", { name: "Adicionar novo" });
  expect(addButton).toBeInTheDocument();
});
