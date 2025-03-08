import { FormTodo } from './FormTodo';
import style from './TodosPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectTodos, selectStatus } from '../../store/todos';
import { FETCH_TODOS, FETCH_TODOS_DELETE_TODO } from '../../store/todos';
import { Loader } from '../Loader';

export function TodosPage() {
    const { main, containerTodo, btn, checkbox } = style;

    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);
    const status = useSelector(selectStatus);

    // console.log('todos', todos);
    // console.log('status', status);

    function handleDelete(id) {
        dispatch(FETCH_TODOS_DELETE_TODO(id));
    };

    useEffect(() => {
        const controller = new AbortController();
        dispatch(FETCH_TODOS(controller.signal));

        return () => {
            controller.abort();
        };
    }, []);

    if (status === "loading") return <Loader />;

    return (
        <div className={main}>
            <FormTodo />
            {todos && (
                <>
                    <ul className={containerTodo}>
                        {todos.map(({ title, id, complate }) => (
                            <li key={id}>
                                <input className={checkbox} type="checkbox" defaultChecked={complate} onChange={(e) => {
                                    console.log(e.target.checked);
                                }} />
                                <p>
                                    {title}
                                </p>
                                <div>
                                    <button className={btn}>Redact</button>
                                    <button className={btn} onClick={() => handleDelete(id)}>Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}