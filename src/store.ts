import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { handleEveryAction } from './handleEveryAction';
import './actions/waste.effect';
import rootReducer from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery(() => true, handleEveryAction);
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer, composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga)

export default store;
