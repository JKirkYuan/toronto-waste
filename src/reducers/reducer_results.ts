import { ADD_SEARCH_RESULT, AddSearchResultsParams, WasteData } from '../actions/index';
import { Action } from 'redux';

const initialState: WasteData[] = [];

export default function(state = initialState, action: AddSearchResultsParams) {
    switch(action.type) {
        case ADD_SEARCH_RESULT:
            return [
                ...action.payload
            ];
    }
    return state;
}
