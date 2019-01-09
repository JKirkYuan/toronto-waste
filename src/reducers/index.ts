import { combineReducers } from 'redux';
import ResultReducer from './reducer_results';
import FavoriteReducer from './reducer_favorites';

const rootReducer = combineReducers({
    wasteList: ResultReducer,
    favoritesList: FavoriteReducer
});

export default rootReducer;
