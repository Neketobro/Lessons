import { Field, Formik, Form, ErrorMessage } from 'formik';
import { todosScheme } from '../../services'

export function Todos() {
    return (
        <div className='container alert alert-secondary'>
            <Formik
                initialValues={{ todoText: '' }}
                onSubmit={(values, formikHelper) => {
                    setTimeout(() => {
                        console.log(values);
                        formikHelper.resetForm();
                        formikHelper.setSubmitting(false);
                    }, 1000)
                }}
                validationSchema={todosScheme}>
                <Form>
                    <p>
                        <ErrorMessage name='todoText' />
                    </p>
                    <Field className='form-control' type="text" name="todoText" placeholder="Enter your text..." />
                    <button className='btn btn-primary' type='submit'>Send</button>
                </Form>
            </Formik>
        </div>
    )
}