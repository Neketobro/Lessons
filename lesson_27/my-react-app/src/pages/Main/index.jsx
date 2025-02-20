import { useState, createElement } from 'react';
import { Footer, Header, PageLayout } from '../../components';
import './Main.scss';

export function MainPage() {
    const [todos, setTodos] = useState([]);

    function CreateTodo({ name, index, onDelete }) {
        return createElement(
            'li',
            { className: 'todo' },
            createElement('i', null, name),
            createElement('button', { onClick: () => onDelete(index) }, 'delete')
        );
    }

    function addTodo() {
        const input = document.querySelector('input[name="todo_input"]');
        if (input.value.trim() === '') return;
        setTodos([...todos, input.value]);
        input.value = '';
    }

    function deleteTodo(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <div>
                    <p>Home Page</p>
                    <input type="text" name="todo_input" />
                    <button onClick={addTodo}>Create Todo</button>
                    <ul>
                        {todos.map((todo, index) => (
                            <CreateTodo key={index} name={todo} index={index} onDelete={deleteTodo} />
                        ))}
                    </ul>
                </div>
            )}
            renderFooter={() => <Footer />}
        />
    );
}
