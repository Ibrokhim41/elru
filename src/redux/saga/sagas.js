import { call, takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { fetchData, fetchBook } from "../books";
import { sagaActions } from "./sagaActions";

let callAPI = async ({ url, method, data }) => {
    return await axios({
        url,
        method,
        data,
    });
};

export function* fetchDataSaga({ payload }) {
    try {
        let result = yield call(() =>
            callAPI({
                url: `${sagaActions.API}/user/books/?cat=${payload}`,
            })
        );
        yield put(fetchData([]));
        yield put(fetchData(result.data));
    } catch (error) {
        // yield put({type: 'TODO_FETCH_FAILED'});
        console.log(error);
    }
}

export function* fetchBookSaga({payload}) {
    try {
        let result = yield call(() => {
            callAPI({
                url: `${sagaActions.API}/user/books/${payload}`
            })
        })
        yield put(fetchBook(result.data))
    } catch (error) {
        console.log(error);
    }
}

export default function* rootSaga() {
    yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
    // yield takeEvery(sagaActions.FETCH_BOOK_SAGA,  fetchBookSaga);
}
