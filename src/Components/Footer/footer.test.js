import {render, screen} from '@testing-library/react'

import Footer from '.'

test('The footer with text is rendered', () => {
    render(<Footer title='My footer'/>)

    const footerContent = screen.getByRole('heading', {level: 3})

    expect(footerContent).toBeInTheDocument(); 
})