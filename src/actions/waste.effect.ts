import axios from 'axios';
import Action from 'redux';
import { call, put } from 'redux-saga/effects';
import { WasteRequestParams, AddSearchResultsParams, addSearchResults } from './index';
import { LOAD_WASTE_REQUEST, WasteData } from '../actions/index';
import { addHandleEvery } from '../handleEveryAction';

export const getWaste = () => {
    const url = 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000';
    return axios.get(url);
}

function* loadWaste(action: WasteRequestParams) {
    const response = yield call(getWaste);
    const filtered = response.data.filter((waste: WasteData) => {
        //const keywords = waste.keywords.replace(/[()]/g, '').split(/[ ,]+/);
        if (waste.keywords.includes(action.payload)) {
            return waste;
        };
    });
    yield put(addSearchResults(filtered));
}

addHandleEvery({
    [LOAD_WASTE_REQUEST]: loadWaste,
});
