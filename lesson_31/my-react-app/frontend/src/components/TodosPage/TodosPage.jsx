import { FormTodo } from './FormTodo';
import style from './TodosPage.module.scss';

export function TodosPage() {
    const { main } = style;

    return (
        <div className={main}>
            <FormTodo />
        </div>
    )
}