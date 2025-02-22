import { useState } from 'react';
import { Footer, Header, PageLayout } from '../../components';
import './Main.scss';
import { useRef } from 'react';

export function MainPage() {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    function CreateTodo({ name, index, onDelete }) {
        return (
            <div className='todo'>
                <i>{name}</i>
                <button onClick={() => onDelete(index)}>delete</button>
            </div>
        )
    }

    function addTodo() {
        if (!inputRef.current || inputRef.current.value.trim() === '') return;
        setTodos([...todos, inputRef.current.value]);
        inputRef.current.value = '';
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
                    <input type="text" name="todo_input" ref={inputRef} />
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
