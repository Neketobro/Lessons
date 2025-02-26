import { Formik, Field, Form } from 'formik';
import { Footer, Header, PageLayout } from '../../components';

export function TodosPage() {
    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <div>
                    <Formik
                        initialValues={{ name: '' }}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                actions.setSubmitting(false);
                            }, 1000);
                        }}>
                        <Form>
                            <Field type="text" name="name" placeholder="Enter your value" />
                            <button type='submit'>Send</button>
                        </Form>
                    </Formik>
                </div>
            )}
            renderFooter={() => <Footer />}
        />
    )
}