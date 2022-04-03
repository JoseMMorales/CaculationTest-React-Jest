import { render, screen } from "@testing-library/react";
import App from "./App";

test("render calculation App", () => {
  render(<App />);
  const ACDigit = screen.getByText(/AC/);
  const DELDigit = screen.getByText(/DEL/);

  expect(ACDigit).toBeInTheDocument();
  expect(DELDigit).toBeInTheDocument();
});
