import { useDispatch } from "react-redux";
import { fetchSwapi } from "../../../ducks/swapi.duck";
import style from "./Navigation.module.scss";
import { Formik, Field, Form } from 'formik';

export function Navigation() {
    const { navBtn, navPanel, inputText, from } = style;
    const dispatch = useDispatch();

    function submitHandler(value) {
        dispatch(fetchSwapi(value.text));
    }

    return (
        <nav>
            <div className={`${navPanel}`}>
                <p>https://swapi.dev/api/</p>
                <Formik
                    initialValues={{ text: '' }}
                    onSubmit={(values, formikHelper) => {
                        setTimeout(() => {
                            submitHandler(values);
                            formikHelper.setSubmitting(false);
                        }, 1000)
                    }}
                >
                    <Form className={from}>
                        <Field type="text" name="text" placeholder="people/1" className={inputText} />
                        <button type="submit" className={navBtn} >Get Info</button>
                    </Form>
                </Formik>
            </div>
        </nav >
    );
}