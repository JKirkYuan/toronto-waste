import { Action } from 'redux';
export const ADD_SEARCH_RESULT = 'Adding Search Results';
export const LOAD_WASTE_REQUEST = 'Request for Waste List';
export const CLEAR_WASTE_RESULTS = 'Clearing Results for Waste List';
export const ADD_TO_FAVORITES = 'Adding item to Favorites';
export const REMOVE_FROM_FAVORITES = 'Removing item from Favorites';

export type WasteRequestParams = {
    type: typeof LOAD_WASTE_REQUEST;
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
    type: typeof ADD_SEARCH_RESULT;
    payload: WasteData[];
};

export function addSearchResults(wasteList: WasteData[]): AddSearchResultsParams {
    return {
        type: ADD_SEARCH_RESULT,
        payload: wasteList
    };
}

export type ClearWasteResultsParams = {
    type: typeof CLEAR_WASTE_RESULTS;
}

export function clearWasteResults(): ClearWasteResultsParams {
    return {
        type: CLEAR_WASTE_RESULTS
    }
}

export type AddToFavoritesParams = {
    type: typeof ADD_TO_FAVORITES;
    payload: WasteData;
}

export function addToFavorites(waste: WasteData): AddToFavoritesParams {
    return {
        type: ADD_TO_FAVORITES,
        payload: waste
    }
}

export type RemoveFromFavoritesParams = {
    type: typeof REMOVE_FROM_FAVORITES;
    payload: string;
}

export function removeFromFavorites(wasteName: string): RemoveFromFavoritesParams {
    return {
        type: REMOVE_FROM_FAVORITES,
        payload: wasteName
    }
}