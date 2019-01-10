import rootReducer from './reducers/index';
import { WasteData } from './actions';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

type State = {
    wasteList: WasteData[];
    favoritesList: WasteData[];
}

export const saveState = (state: State) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {

    }
}