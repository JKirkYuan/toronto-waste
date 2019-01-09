import { ADD_TO_FAVORITES, WasteData, AddToFavoritesParams } from '../actions/index';
import { Action } from 'redux';

const initialState: WasteData[] = [];

export default function(state = initialState, action: AddToFavoritesParams) {
    switch(action.type) {
        case ADD_TO_FAVORITES:
            if (state.includes(action.payload)) {
                return state.filter(items => items !== action.payload);
            }
            else {
                return [
                    action.payload,
                    ...state,
                ];
            }
    }
    return state;
}
