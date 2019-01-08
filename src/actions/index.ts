import { Action } from 'redux';
import { LOAD_WASTE_REQUEST } from '../reducers/types';

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
