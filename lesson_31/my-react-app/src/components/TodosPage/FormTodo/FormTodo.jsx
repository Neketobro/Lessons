import { Formik, ErrorMessage, Field, Form } from 'formik';

export function FormTodo() {
    return (
        <div>
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
                        {/* <ErrorMessage name="nameTodo" /> */}
                    </p>
                    <Field type="text" name="nameTodo" placeholder="Enter your value" />
                    <button type='submit'>Send</button>
                </Form>
            </Formik>
        </div>
    )
}