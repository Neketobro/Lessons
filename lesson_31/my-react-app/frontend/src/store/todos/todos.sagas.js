import { getTodos } from "../../api";
import { put, call, takeLatest, select } from 'redux-saga/effects';
import { FETCH_TODOS, FETCH_TODOS_ERROR, FETCH_TODOS_LOADING, FETCH_TODOS_SUCCESS } from "./todos.action";
import { selectStatus } from "./todos.slice";

export function* fetchTodosSaga({ payload }) {
    yield put(FETCH_TODOS_LOADING());
    const status = select(selectStatus);
    try {
        if (status === "loading") return;
        const response  = yield call(getTodos, payload);
        
        yield put(FETCH_TODOS_SUCCESS(response.data));
    } catch (e) {
        console.log(e);
        
        yield put(FETCH_TODOS_ERROR());
    }
}

export function* watchfetchTodosSagas() {
    yield takeLatest(FETCH_TODOS.type, fetchTodosSaga);
}