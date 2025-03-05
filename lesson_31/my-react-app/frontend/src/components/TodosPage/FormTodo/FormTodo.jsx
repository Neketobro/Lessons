import { Formik, ErrorMessage, Field, Form } from 'formik';
import style from './FormTodo.module.scss';
import { addTodo } from '../../../store/todos';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export function FormTodo() {
    const { form, btnSend, formWrapper } = style; 
    const dispatch = useDispatch()

    function submitHandler(value) {
        console.log(value);
        if (!value.nameTodo.trim()) return;

        const data = {
            id: uuidv4(),
            title: value.nameTodo,
            complate: false
        }
        // console.log(data);
        
        dispatch(addTodo(data));
    }

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
        </div>
    )
}