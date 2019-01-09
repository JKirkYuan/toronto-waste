import { Action } from 'redux';
export const ADD_SEARCH_RESULT = 'Adding Search Results';
export const LOAD_WASTE_REQUEST = 'Request for Waste List'

export type WasteRequestParams = {
    type: typeof LOAD_WASTE_REQUEST,
    payload: string;
};

export function wasteRequest(input: string): WasteRequestParams {
    return {
        type: LOAD_WASTE_REQUEST,
        payload: input
    };
}

export type WasteData = {
    body: string;
    category: string;
    id?: string;
    keywords: string;
    title: string;
};

export type AddSearchResultsParams = {
    type: typeof ADD_SEARCH_RESULT,
    payload: WasteData[]
};

export function addSearchResults(wasteList: WasteData[]): AddSearchResultsParams {
    return {
        type: ADD_SEARCH_RESULT,
        payload: wasteList
    };
}
