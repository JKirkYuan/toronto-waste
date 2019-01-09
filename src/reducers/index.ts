import { combineReducers } from 'redux';
import ResultReducer from './reducer_results';

const rootReducer = combineReducers({
    wasteList: ResultReducer
});

export default rootReducer;
