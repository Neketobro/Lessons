import { getTodos, addTodo, deleteTodo, chengeTodo } from "../../api";
import { put, call, takeLatest, select } from 'redux-saga/effects';
import {
    FETCH_TODOS,
    FETCH_TODOS_ERROR,
    FETCH_TODOS_LOADING,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_POST,
    FETCH_TODOS_POST_SUCCESS,
    FETCH_TODOS_DELETE_TODO,
    FETCH_TODOS_DELETE_SUCCESS,
    FETCH_TODOS_CHANGE,
    FETCH_TODOS_CHANGE_SUCCESS,
    FETCH_TODOS_CHECK,
    FETCH_TODOS_CHECK_SUCCESS
} from "./todos.action";
import { selectStatus } from "./todos.slice";

export function* fetchTodosSaga({ payload }) {
    yield put(FETCH_TODOS_LOADING());
    const status = select(selectStatus);
    try {
        if (status === "loading") return;
        const response = yield call(getTodos, payload);

        yield put(FETCH_TODOS_SUCCESS(response.data));
    } catch (e) {
        console.log(e);
        yield put(FETCH_TODOS_ERROR());
    }
}
export function* watchFetchTodosSagas() {
    yield takeLatest(FETCH_TODOS, fetchTodosSaga);
}

export function* addTodoSaga({ payload }) {
    yield put(FETCH_TODOS_LOADING());
    const status = select(selectStatus);
    try {
        if (status === "loading") return;
        const response = yield call(addTodo, payload);

        yield put(FETCH_TODOS_POST_SUCCESS(response.data));
    } catch (e) {
        console.log(e);
        yield put(FETCH_TODOS_ERROR());
    }
}
export function* watchAddTodoSagas() {
    yield takeLatest(FETCH_TODOS_POST, addTodoSaga);
}

export function* deleteTodoSaga({ payload }) {
    yield put(FETCH_TODOS_LOADING());
    const status = select(selectStatus);
    try {
        if (status === "loading") return;
        yield call(deleteTodo, payload);

        yield put(FETCH_TODOS_DELETE_SUCCESS());
        yield put(FETCH_TODOS());
    } catch (e) {
        console.log(e);
        yield put(FETCH_TODOS_ERROR());
    }
}
export function* watchDeleteTodoSagas() {
    yield takeLatest(FETCH_TODOS_DELETE_TODO, deleteTodoSaga);
}

export function* changeTodoSaga({ payload }) {
    yield put(FETCH_TODOS_LOADING());
    const status = select(selectStatus);
    try {
        if (status === "loading") return;
        yield call(chengeTodo, payload);

        yield put(FETCH_TODOS_CHANGE_SUCCESS());
        yield put(FETCH_TODOS());
    } catch (e) {
        console.log(e);
        yield put(FETCH_TODOS_ERROR());
    }
}
export function* watchChengeTodoSagas() {
    yield takeLatest(FETCH_TODOS_CHANGE, changeTodoSaga);
}

export function* checkTodoSaga({ payload }) {
    yield put(FETCH_TODOS_LOADING());
    const status = select(selectStatus);
    try {
        if (status === "loading") return;
        yield call(chengeTodo, payload);

        yield put(FETCH_TODOS_CHECK_SUCCESS());
        yield put(FETCH_TODOS());
    } catch (e) {
        console.log(e);
        yield put(FETCH_TODOS_ERROR());
    }
}
export function* watchCheckTodoSagas() {
    yield takeLatest(FETCH_TODOS_CHECK, checkTodoSaga);
}