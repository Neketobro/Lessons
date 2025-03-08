import { createAction } from "@reduxjs/toolkit";

export const FETCH_TODOS = createAction("todos/fetchTodos");

export const FETCH_TODOS_LOADING = createAction("todos/fetchTodos/loading");
export const FETCH_TODOS_SUCCESS = createAction("todos/fetchTodos/success");
export const FETCH_TODOS_ERROR = createAction("todos/fetchTodos/error");

export const FETCH_TODOS_POST = createAction("todos/fetchTodos/post");
export const FETCH_TODOS_POST_SUCCESS = createAction("todos/fetchTodos/post/success");

export const FETCH_TODOS_DELETE_TODO = createAction("todos/fetchTodos/delete/todo");
export const FETCH_TODOS_DELETE_LOADING = createAction("todos/fetchTodos/delete/loading");
export const FETCH_TODOS_DELETE_ERROR = createAction("todos/fetchTodos/delete/error");
export const FETCH_TODOS_DELETE_SUCCESS = createAction("todos/fetchTodos/delete/success");


// треба просиати нову функцію, та описати POST-запит, для довання нового todo
// треба просиати нову функцію, та описати PUT-запит, для редагування  todo
// треба просиати нову функцію, та описати PUT-запит, для відмітки про виконано  todo
// треба просиати нову функцію, та описати DELETE-запит, для видалаенняя todo