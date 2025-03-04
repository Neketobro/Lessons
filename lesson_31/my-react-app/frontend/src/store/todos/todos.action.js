import { createAction } from "@reduxjs/toolkit";

export const FETCH_TODOS = createAction("user/todos");
export const FETCH_TODOS_LOADING = createAction("user/todos/loading");
export const FETCH_TODOS_SUCCESS = createAction("user/todos/success");
export const FETCH_TODOS_ERROR = createAction("user/todos/error");