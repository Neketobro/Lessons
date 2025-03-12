import { useSelector } from "react-redux"
import { selectTodo } from "../../ducks/todo.duck"

export function Footer() {
    const todos = useSelector(selectTodo)

    return (
        <div>
            <h5>Todo length: {todos.length}</h5>
        </div>
    )
}