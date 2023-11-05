import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
});

test("renders the Counter component", () => {
  const countElement = screen.getByTestId("count");
  expect(countElement).toBeInTheDocument();
});

test("renders the increment button", () => {
  const incrementElement = screen.getByTestId("increment");
  expect(incrementElement).toBeInTheDocument();
});

test("increments the count", () => {
  const incrementElement = screen.getByTestId("increment");
  const countElement = screen.getByTestId("count");
  fireEvent.click(incrementElement);
  expect(countElement.textContent).toBe("1");
});

test("renders the decrement button", () => {
  const decrementElement = screen.getByTestId("decrement");
  expect(decrementElement).toBeInTheDocument();
});

test("decrements the count", () => {
  const decrementElement = screen.getByTestId("decrement");
  const countElement = screen.getByTestId("count");
  fireEvent.click(decrementElement);
  expect(countElement.textContent).toBe("0");
});

test("renders the reset button", () => {
  const resetElement = screen.getByTestId("reset");
  expect(resetElement).toBeInTheDocument();
});

test("resets the count", () => {
  const incrementElement = screen.getByTestId("increment");
  const resetElement = screen.getByTestId("reset");
  const countElement = screen.getByTestId("count");
  fireEvent.click(incrementElement);
  fireEvent.click(resetElement);
  expect(countElement.textContent).toBe("0");
});

test("renders the initial count color to be blue and then click 30 times and expect it to be red", () => {
  const incrementElement = screen.getByTestId("increment");
  const countElement = screen.getByTestId("count");
  expect(countElement.style.color).toBe("rgb(0, 0, 255)");
  for (let i = 0; i < 30; i++) {
    fireEvent.click(incrementElement);
  }
  expect(countElement.style.color).toBe("rgb(255, 0, 0)");
});
