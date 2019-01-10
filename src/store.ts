import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { handleEveryAction } from './handleEveryAction';
import './actions/waste.effect';
import rootReducer from './reducers/index';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery(() => true, handleEveryAction);
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

store.subscribe(throttle(() => {
    saveState({
        wasteList: [],
        favoritesList: store.getState().favoritesList
    });
}, 1000));

sagaMiddleware.run(rootSaga)

export default store;
