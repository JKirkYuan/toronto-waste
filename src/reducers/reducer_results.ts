import { ADD_SEARCH_RESULT, AddSearchResultsParams, WasteData } from '../actions/index';
import { Action } from 'redux';

type ResultsState = {
};

const initialState: ResultsState = [];

export default function(state = initialState, action: AddSearchResultsParams): ResultsState {
    switch(action.type) {
        case ADD_SEARCH_RESULT:
            return [
                ...action.payload
            ];
    }
    return state;
}
