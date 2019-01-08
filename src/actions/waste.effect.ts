import axios from 'axios';
import Action from 'redux';
import { call, put } from 'redux-saga/effects';
import { WasteRequestParams } from './index';
import { LOAD_WASTE_REQUEST } from '../reducers/types';
import { addHandleEvery } from '../handleEveryAction';

const getWaste = () => {
    const url = 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000';
    return axios.get(url);
}

function* loadWaste(action: WasteRequestParams) {
    console.log("inside effect");
    const response = yield call(getWaste);
    console.log(response);
}

addHandleEvery({
    [LOAD_WASTE_REQUEST]: loadWaste,
});
