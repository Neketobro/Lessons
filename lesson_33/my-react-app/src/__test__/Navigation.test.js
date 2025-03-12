import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navigation } from '../components/Header/Navigation';

describe('Navigation', () => {
    it.skip('should have title Todo', () => {
        render(
            <MemoryRouter>
                <Navigation />
            </MemoryRouter>
        );

        const title = screen.getByText(/Todo/i);
        expect(title).toBeDefined();
    });
});