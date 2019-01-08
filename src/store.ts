import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { handleEveryAction } from './handleEveryAction';
import './actions/waste.effect';
import rootReducer from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery(() => true, handleEveryAction);
}

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

export default store;
