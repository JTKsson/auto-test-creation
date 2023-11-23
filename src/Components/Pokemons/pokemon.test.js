import {render, screen, fireEvent} from '@testing-library/react'

import PokemonVote from '.'

describe('PokemonVote component',() => {
test('Renders the title, image, vote buttons, and scores for three Pokemon', () => {
    render(<PokemonVote/>)

    const names = screen.getAllByRole('heading', {level: 3})
    const images = screen.getAllByRole('img')
    const voteButton = screen.getAllByRole('button', {name: (/Vote/i)})
    const voteScore = screen.getAllByTestId('paragraph', {name: (/votes/i)})

    expect(names.length).toBe(3)
    expect(images.length).toBe(3); 
    expect(voteButton.length).toBe(3); 
    expect(voteScore.length).toBe(3); 
})

    test('Changes the input field value when the "Change name" button is clicked', () => {
    render(< PokemonVote/>)

    const changeNameButtons = screen.getAllByRole('button', { name: /Change name/i });

    expect(changeNameButtons.length).toBe(3)

    changeNameButtons.forEach((button) => {
    fireEvent.click(button);
  });
})
})