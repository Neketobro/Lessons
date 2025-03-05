import { Formik, ErrorMessage, Field, Form } from 'formik';
import style from './FormTodo.module.scss';

export function FormTodo() {
    const { form, btnSend, formWrapper } = style; 

    function submitHandler(value) {
        console.log(value);
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