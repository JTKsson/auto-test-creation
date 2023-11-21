import { fireEvent, render, screen } from "@testing-library/react";
import VoteButton from ".";

describe("There's a button rendered and clicking the button should change the value of thhe voting score", () => {
  test("There's a button rendered with the text Vote on it", () => {
    render(<VoteButton />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument;
    expect(button).toHaveTextContent(/vote/i);
  });

  test("Clicking the button should increade the value of the voting score by one", () => {
    render(<VoteButton/>)

    const voteButton = screen.getByRole("button", {name: "Vote"});
    const voteValueElement = screen.getByTestId("vote-value")

    expect(voteButton).toBeInTheDocument()
    expect(voteValueElement).toHaveTextContent("Vote: 0");

    fireEvent.click(voteButton);

    // expect(voteValue).toBe(1);

    expect(voteValueElement).toHaveTextContent("Vote: 1");

  })
});
