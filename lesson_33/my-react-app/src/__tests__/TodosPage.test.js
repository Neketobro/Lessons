import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from "react-router-dom";
import { store } from '../store';
import { TodosPage } from '../pages/Todos/index.jsx';

describe('TodosPage', () => {
    it('should enter numbers and letters in the text field', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <TodosPage />
                </Provider>
            </MemoryRouter>
        );
        const input = screen.getByPlaceholderText('Enter your value')

        fireEvent.change(input, { target: { nameTodo: '123' } })
        expect(input.nameTodo).toBe('123');

        fireEvent.change(input, { target: { nameTodo: 'Todos' } })
        expect(input.nameTodo).toBe('Todos');
    })
})