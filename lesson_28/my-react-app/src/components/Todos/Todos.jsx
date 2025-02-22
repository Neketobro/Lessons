import { useState } from 'react';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { todosScheme } from '../../services';
import './Todos.scss';

export function Todos() {
    const [todos, setTodos] = useState([]);    

    function CreateTodo({ name, index, onDelete }) {
        return (
            <div className='container-todo alert alert-light'>
                <i>{name}</i>
                <button className='btn btn-danger' onClick={() => onDelete(index)}>delete</button>
            </div>
        )
    }

    function submitHandler(values) {
        console.log('value in function ->', values.todoText);
        if (values.todoText.trim() === '') return;
        setTodos([...todos, values.todoText]);
    }

    function deleteTodo(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <div>
            <div className='container alert alert-secondary'>
                <Formik
                    initialValues={{ todoText: '' }}
                    onSubmit={(values, formikHelper) => {
                        setTimeout(() => {
                            submitHandler(values);
                            formikHelper.resetForm();
                            formikHelper.setSubmitting(false);
                        }, 1000)
                    }}
                    validationSchema={todosScheme}>
                    <Form className='container-form'>
                        <p className='error-message'>
                            <ErrorMessage name='todoText' />
                        </p>
                        <Field className='form-control' type="text" name="todoText" placeholder="Enter your text..." />
                        <button className='btn btn-primary' type='submit'>Send</button>
                    </Form>
                </Formik>
            </div>
            <div className='container alert alert-secondary'>
                <ul>
                    <p>Your todos:</p>
                    {todos.map((todo, index) => (
                        <CreateTodo key={index} name={todo} index={index} onDelete={deleteTodo} />
                    ))}
                </ul>
            </div>
        </div>
    )
}