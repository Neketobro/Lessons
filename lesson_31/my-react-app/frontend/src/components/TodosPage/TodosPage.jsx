import { FormTodo } from './FormTodo';
import style from './TodosPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectTodos, selectStatus } from '../../store/todos';
import { FETCH_TODOS } from '../../store/todos';
import { Loader } from '../Loader';

export function TodosPage() {
    const { main, containerTodo } = style;

    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);
    const status = useSelector(selectStatus);

    console.log('todos', todos);
    console.log('status', status);

    useEffect(() => {
        const controller = new AbortController();
        dispatch(FETCH_TODOS(controller.signal));

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <div className={main}>
            <FormTodo />
            <div className={containerTodo}>
                {status === "loading" && <Loader />}
            </div>
        </div>
    )
}