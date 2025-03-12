import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { Navigation } from '../components/Header/Navigation/Navigation.jsx';

describe('Navigation', () => {
    it.skip('should have title Todo', () => {
        render(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        );

        const title = screen.getByText(/Todo/i);

        expect(title).toBeDefined();
        expect(title).not.toBeFalsy();
    });
})