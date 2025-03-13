import { useState, useRef } from 'react';
import { Footer, Header, PageLayout } from '../../components';
import './Main.scss';

export function MainPage() {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState('');
    const inputRef = useRef(null);

    function CreateTodo({ name, index, onDelete }) {
        return (
            <div className='todo'>
                <i>{name}</i>
                <button onClick={() => onDelete(index)}>delete</button>
            </div>
        );
    }

    function addTodo() {
        if (!inputRef.current || inputRef.current.value.trim() === '') {
            setError('Text invalid');
            return;
        }
        setTodos([...todos, inputRef.current.value]);
        inputRef.current.value = '';
        setError('');
    }

    function deleteTodo(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <div>
                    <p>Todo Page</p>
                    <input type="text" name="todo_input" placeholder='Enter name...' ref={inputRef} />
                    <button onClick={addTodo}>Create Todo</button>
                    {error && <p className="error">{error}</p>}
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
