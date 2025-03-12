import { Header } from '../components/Header/Header.jsx'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
    it('Title should TODO', () => {
        render(<Header />)
        const title = screen.getByText(/Todos/i)

        expect(title).toBeDefined();
    })
})