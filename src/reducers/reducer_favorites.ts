import { ADD_TO_FAVORITES, WasteData, AddToFavoritesParams, REMOVE_FROM_FAVORITES, RemoveFromFavoritesParams } from '../actions/index';

const initialState: WasteData[] = [];

export default function(state = initialState, action: AddToFavoritesParams | RemoveFromFavoritesParams) {
    switch(action.type) {
        case ADD_TO_FAVORITES:
            return [
                ...state,
                action.payload,
            ];
        case REMOVE_FROM_FAVORITES:
            return state.filter(items => items.title !== action.payload);
    }
    return state;
}
