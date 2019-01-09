import { ADD_SEARCH_RESULT, AddSearchResultsParams, WasteData, ClearWasteResultsParams, CLEAR_WASTE_RESULTS } from '../actions/index';
import { Action } from 'redux';

const initialState: WasteData[] = [];

export default function(state = initialState, action: AddSearchResultsParams | ClearWasteResultsParams) {
    switch(action.type) {
        case ADD_SEARCH_RESULT:
            return [
                ...action.payload
            ];
        case CLEAR_WASTE_RESULTS:
            return [];
    }
    return state;
}
