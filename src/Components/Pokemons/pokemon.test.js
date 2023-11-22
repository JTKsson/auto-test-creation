import {render, screen} from '@testing-library/react'

import PokemonVote from '.'

test('The title and image of pokemon is rendered', () => {
    render(<PokemonVote/>)

    const names = screen.getAllByRole('heading', {level: 3})
    const images = screen.getAllByRole('img')
    const voteButton = screen.getAllByRole('button')
    const voteScore = screen.getAllByTestId('paragraph')

    expect(names.length).toBe(3)
    expect(images.length).toBe(3); 
    expect(voteButton.length).toBe(3); 
    expect(voteScore.length).toBe(3); 
})