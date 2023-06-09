import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "./App";
beforeEach(() => {
  render(<App />);
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test(() => {
  fireEvent.click(screen.getByText("TÜRKÇE'YE GEÇ"));
  expect(screen.getByText("ENGLISH")).toBeInTheDocument();
});
test(() => {
  fireEvent.click(screen.getByText("ENGLISH"));
  expect(screen.getByText("TÜRKÇE'YE GEÇ")).toBeInTheDocument();
});
test(() => {
  expect(screen.getByText("Ayşegül Baş").toBeInTheDocument());
  expect(screen.getByText("aysgl_nese@hotmail.com").toBeInTheDocument());
});
