import { render, screen } from "@testing-library/react";
import App from "../componenets/App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/chatbot/i);
  expect(linkElement).toBeInTheDocument();
});
