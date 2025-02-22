import * as yup from 'yup';

export const todosScheme = yup.object({
    todoText: yup
        .string()
        .required('This field is required.')
        .min(5, 'The text must not exceed 5 characters.')
})