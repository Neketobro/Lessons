import { getTodos } from "../../api";
import { put, call, takeLatest } from 'redux-saga/effects';
import { FETCH_TODOS, FETCH_TODOS_ERROR, FETCH_TODOS_LOADING, FETCH_TODOS_SUCCESS } from "./todos.action";

export function* fetchTodosSaga({ payload }) {
    try {
        yield put(FETCH_TODOS_LOADING);

        const { data } = yield call(getTodos, payload.signal);

        // const preparedData = data
        console.log(data);

        yield put(FETCH_TODOS_SUCCESS(data));
    } catch (e) {
        yield put(FETCH_TODOS_ERROR);
    }
}

export function* watchfetchTodosSagas() {
    yield takeLatest(FETCH_TODOS.type, fetchTodosSaga);
}