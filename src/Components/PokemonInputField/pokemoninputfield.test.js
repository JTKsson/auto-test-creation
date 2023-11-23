import {render, screen, fireEvent} from '@testing-library/react'
import PokemonInput from '.'

describe('When the input field is filled, and the button is clicked, the name of the caracter will change', () => {
    test('An input field with button is rendered', () => {
    render(<PokemonInput />)

    const inputField = screen.getByPlaceholderText('Enter new name');
    const changeNameButton = screen.getByRole('button', {name: (/Change name/i)});

    expect(inputField).toBeInTheDocument();
    expect(changeNameButton).toBeInTheDocument();
})

    test('The input field updates the value', () => {
        render(<PokemonInput />)

        const inputField = screen.getByPlaceholderText('Enter new name');
    //    const submitbutton = screen.getByRole('button', {name: (/Change name/i)});

        fireEvent.change(inputField, { target: { value: 'David' } });
    //    fireEvent.click(submitbutton)

        expect(inputField.value).toBe('David');
    })
})