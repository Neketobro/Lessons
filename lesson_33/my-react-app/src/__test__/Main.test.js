import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainPage } from '../pages/Main/index.jsx';

describe('Main', () => {
    it.skip('should the text field can contain both numbers and letters', () => {
        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText(/Enter name fot Todo/i);

        fireEvent.change(input, { target: { value: 'Test' } });
        expect(input.value).toBe('Test');

        fireEvent.change(input, { target: { value: '123' } });
        expect(input.value).toBe('123');

        fireEvent.change(input, { target: { value: 'Test123' } });
        expect(input.value).toBe('Test123');
    });

    it.skip('Clicking on the “Add” button without text clicks a message', () => { // ДОДЕЛАТЬ
        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>
        );

        const button = screen.getByText(/Create Todo/i);

        fireEvent.click(button);
        const errorMessage = screen.getByText(/Text invalid/i);
        expect(errorMessage).toBeDefined();
    })

    it.skip('after adding a task, it appears in the list', () => {
        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText(/Enter name fot Todo/i);
        const button = screen.getByText(/Create Todo/i);

        fireEvent.change(input, { target: { value: 'New task' } });
        fireEvent.click(button);

        const newTask = screen.getByText(/New task/i);
        expect(newTask).toBeDefined();
    });

    it.skip('should be removed from the list', () => {
        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText(/Enter name fot Todo/i);
        const button = screen.getByText(/Create Todo/i);

        fireEvent.change(input, { target: { value: 'task for deleting' } });
        fireEvent.click(button);

        const delButton = screen.getByText(/delete/i);
        fireEvent.click(delButton);
        const deletedTask = screen.queryByText(/task for deleting/i);

        expect(deletedTask).toBeFalsy();
    })
});