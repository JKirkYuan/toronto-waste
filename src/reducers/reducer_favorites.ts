import { ADD_TO_FAVORITES, WasteData, AddToFavoritesParams, REMOVE_FROM_FAVORITES, RemoveFromFavoritesParams } from '../actions/index';
import { Action } from 'redux';

const initialState: WasteData[] = [];

export default function(state = initialState, action: AddToFavoritesParams | RemoveFromFavoritesParams) {
    switch(action.type) {
        case ADD_TO_FAVORITES:
            if (state.includes(action.payload)) {
                return state.filter(items => items !== action.payload);
            }
            else {
                return [
                    ...state,
                    action.payload,
                ];
            };
        case REMOVE_FROM_FAVORITES:
            return state.filter(items => items.title !== action.payload);
    }
    return state;
}
