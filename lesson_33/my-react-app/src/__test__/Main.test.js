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
});


//3
// import { render, screen, fireEvent } from '@testing-library/react';
// import App from '../App';

// test('натискання на кнопку "Додати" без тексту викликає помилку', () => {
//   render(<App />);
//   const addButton = screen.getByText(/додати/i);
//   fireEvent.click(addButton);
//   const errorMessage = screen.getByText(/будь ласка, введіть текст завдання/i);
//   expect(errorMessage).toBeInTheDocument();
// });



// 4
// import { render, screen, fireEvent } from '@testing-library/react';
// import App from '../App';

// test('після додавання завдання воно з\'являється у списку', () => {
//   render(<App />);
//   const inputElement = screen.getByPlaceholderText(/додайте нове завдання/i);
//   const addButton = screen.getByText(/додати/i);
//   fireEvent.change(inputElement, { target: { value: 'Нове завдання' } });
//   fireEvent.click(addButton);
//   const newTask = screen.getByText(/нове завдання/i);
//   expect(newTask).toBeInTheDocument();
// });


//5
// import { render, screen, fireEvent } from '@testing-library/react';
// import App from '../App';

// test('можна видалити завдання зі списку', () => {
//   render(<App />);
//   const inputElement = screen.getByPlaceholderText(/додайте нове завдання/i);
//   const addButton = screen.getByText(/додати/i);
//   fireEvent.change(inputElement, { target: { value: 'Завдання для видалення' } });
//   fireEvent.click(addButton);
//   const deleteButton = screen.getByLabelText(/видалити завдання для видалення/i);
//   fireEvent.click(deleteButton);
//   const deletedTask = screen.queryByText(/завдання для видалення/i);
//   expect(deletedTask).not.toBeInTheDocument();
// });