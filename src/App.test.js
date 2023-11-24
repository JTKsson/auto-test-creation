import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("The content of the imported components have been rendered", () => {

  test("There's a title rendered", () => {

    render(<App />)
  
    const pageTitle = screen.getByRole("heading", {level: 1})
  
    expect(pageTitle).toBeInTheDocument()
  
  })

  test("The value of who is winning the vote is rendered", () => {
    render(<App />)

    const winnerValue = screen.getByRole("heading", {level: 2})
    expect(winnerValue).toBeInTheDocument()

  })

  test("The input field and submit button is rendered from imported component", () => {
    render(<App />);

    const userInputField = screen.getByPlaceholderText("Enter your name");
    expect(userInputField).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });

})

describe("In imported component1 is an input field and submit button that take userInput value, which will be rendered in the imported component2", () => {

  test("The user input value display in component 2 is rendered from an imported component after user input value from component 1 has been submitted", () => {
    render(<App />);

    const userInputEmpty = screen.queryByTestId("user-input-display");
    expect(userInputEmpty).toBeNull();

    const userInputField = screen.getByPlaceholderText("Enter your name");
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(userInputField, { target: { value: "Timo Calzone" } });
    fireEvent.click(submitButton);

    const userInputDisplay = screen.getByTestId("user-input-display");
    expect(userInputDisplay).toBeInTheDocument();
  });

  test("the input field value from component1 changes the input display value of component2", () => {
    render(<App/>)

    const userInputField = screen.getByPlaceholderText("Enter your name");
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(userInputField, { target: { value: "Timo Calzone" } });
    fireEvent.click(submitButton);

    const userInputDisplay = screen.getByTestId("user-input-display");
    expect(userInputDisplay).toHaveTextContent(/Timo Calzone/i);

  })
});
