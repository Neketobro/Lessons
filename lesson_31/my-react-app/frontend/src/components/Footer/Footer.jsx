import style from './Footer.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from '../../store/todos';
import { FETCH_TODOS_DELETE_TODO } from '../../store/todos';


export function Footer() {
    const { footer, btnClear } = style;
    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);

    function deleteAllTodos() {
        todos.map((key) => {
            dispatch(FETCH_TODOS_DELETE_TODO(key.id));
        })
    }

    return (
        <div className={footer}>
            <h1>Todos count: {todos.length}</h1>
            {todos.length > 0 && <button className={btnClear} onClick={deleteAllTodos}>Clear All</button>}
        </div>
    )
}