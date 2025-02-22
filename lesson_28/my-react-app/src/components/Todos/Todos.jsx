import { Field, Formik, Form, ErrorMessage } from 'formik';
import { todosScheme } from '../../services'

export function Todos() {
    return (
        <div>
            <Formik
                initialValues={{ todoText: '' }}
                onSubmit={(values, formikHelper) => {
                    setTimeout(() => {
                        console.log(values);
                        formikHelper.resetForm();
                        formikHelper.setSubmitting(false)
                    }, 1000)
                }}
                validationSchema={todosScheme}>
                <Form>
                    <Field type="text" name="todoText" placeholder="Enter your text..." />
                    <ErrorMessage name='todoText' />
                    <button type='submit'>Send</button>
                </Form>
            </Formik>
        </div>
    )
}