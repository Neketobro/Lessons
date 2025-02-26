import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Footer, Header, PageLayout } from '../../components';
import { todosScheme } from '../../services'
import { v4 as uuidv4 } from 'uuid';
import { addTodo, selectTodo } from '../../ducks/todo.duck.js';
import { useDispatch, useSelector } from 'react-redux';

export function TodosPage() {
    const dispatch = useDispatch();
    const todos = useSelector(selectTodo);
    
    function submitHandler(value) {
        if (!value.nameTodo.trim()) return;

        const data = {
            id: uuidv4(),
            name: value.nameTodo,
        }
        dispatch(addTodo(data));
    }

    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <div>
                    <Formik
                        initialValues={{ nameTodo: '' }}
                        onSubmit={(values, formikHelper) => {
                            setTimeout(() => {
                                submitHandler(values);
                                formikHelper.resetForm();
                                formikHelper.setSubmitting(false);
                            }, 1000)
                        }}
                        validationSchema={todosScheme}>
                        <Form>
                            <p>
                                <ErrorMessage name="nameTodo" />
                            </p>
                            <Field type="text" name="nameTodo" placeholder="Enter your value" />
                            <button type='submit'>Send</button>
                        </Form>
                    </Formik>
                    {todos.length > 0 && (
                        <>
                            <ul>
                                {todos.map(({ name, id }) => (
                                    <li key={id}>
                                        Todo: {name}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            )}
            renderFooter={() => <Footer />}
        />
    )
}