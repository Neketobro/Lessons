import { Formik, ErrorMessage, Field, Form } from 'formik';
import style from './FormTodo.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectTodos, selectStatus } from '../../../store/todos';
import { FETCH_TODOS } from '../../../store/todos';


export function FormTodo() {
    const { form, btnSend, formWrapper } = style;

    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);
    const status = useSelector(selectStatus);

    console.log(status);
    console.log(todos);


    function submitHandler(value) {
        console.log(value);
    }

    useEffect(() => {
        const controller = new AbortController();
        dispatch(FETCH_TODOS(controller.signal));

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <div className={formWrapper}>
            <Formik
                initialValues={{ nameTodo: '' }}
                onSubmit={(values, formikHelper) => {
                    setTimeout(() => {
                        submitHandler(values);
                        formikHelper.resetForm();
                        formikHelper.setSubmitting(false);
                    }, 1000)
                }}>
                <Form>
                    <p>
                        <ErrorMessage name="nameTodo" />
                    </p>
                    <Field className={form} type="text" name="nameTodo" placeholder="Enter your value" />
                    <button className={btnSend} type='submit'>Send</button>
                </Form>
            </Formik>
            {todos}
        </div>
    )
}