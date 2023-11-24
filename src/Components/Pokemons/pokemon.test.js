import {
  render,
  screen,
  fireEvent,
  getByTestId,
  waitFor,
} from "@testing-library/react";
import PokemonVote from ".";

describe("PokemonVote component", () => {
  test("Renders the title, image, vote buttons, and scores for three Pokemon", () => {
    render(<PokemonVote />);

    const names = screen.getAllByRole("heading", { level: 3 });
    const images = screen.getAllByRole("img");
    const voteButton = screen.getAllByRole("button", { name: /Vote/i });
    const voteScore = screen.getAllByTestId("paragraph", { name: /votes/i });

    expect(names.length).toBe(3);
    expect(images.length).toBe(3);
    expect(voteButton.length).toBe(3);
    expect(voteScore.length).toBe(3);
  });



    test('Changes the input field value when the "Change name" button is clicked', () => {
    render(<PokemonVote />)

    const inputFields = screen.getAllByPlaceholderText('Enter new name')
    const changeNameButtons = screen.getAllByRole('button', { name: /Change name/i });

    expect(changeNameButtons.length).toBe(3)
    expect(inputFields.length).toBe(3)

    changeNameButtons.forEach((button) => {
      fireEvent.click(button);
    });
  });

  test("PokemonInput updates the respective name", () => {
    render(<PokemonVote />);

    waitFor(() => {
      const bulbasaurInput = getByTestId("bulbasaur-input");
      expect(bulbasaurInput).toBeInTheDocument();
      fireEvent.change(bulbasaurInput, {
        target: { value: "New Bulbasaur Name" },
      });
      expect(bulbasaurInput.value).toBe("New Bulbasaur Name");
    });

    waitFor(() => {
      const charmanderInput = getByTestId("charmander-input");
      expect(charmanderInput).toBeInTheDocument();
      fireEvent.change(charmanderInput, {
        target: { value: "New Charmander Name" },
      });
      expect(charmanderInput.value).toBe("New Charmander Name");
    });

    waitFor(() => {
      const squirtleInput = getByTestId("squirtle-input");
      expect(squirtleInput).toBeInTheDocument();
      fireEvent.change(squirtleInput, {
        target: { value: "New Squirtle Name" },
      });
      expect(squirtleInput.value).toBe("New Squirtle Name");
    });
  });
});

