import { getHandleEvery } from '../handleEveryAction';
import { getWaste } from './waste.effect';
import { LOAD_WASTE_REQUEST, wasteRequest, addSearchResults, WasteData } from './index';
import { call, put } from 'redux-saga/effects';

describe('Waste Effect tests', () => {
    it('should handle Request for Waste List', () => {
        const input = 'test_waste_term';
        const fakeWasteData = {
            data:
            [
                {
                    body: '&lt;ul&gt; \n &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;',
                    category: 'Blue Bin',
                    title: 'Blue Bin (metal lid)',
                    keywords: 'glass'
                },
                {
                    body: '&lt;ul&gt; \n &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;',
                    category: 'Black Bin',
                    title: 'Black Bin (metal lid)',
                    keywords: 'test_waste_term'
                },
            ]
        };
        const filteredResults = [
            {
                body: '&lt;ul&gt; \n &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;',
                category: 'Black Bin',
                title: 'Black Bin (metal lid)',
                keywords: 'test_waste_term'
            }
        ]
        const gen = getHandleEvery(LOAD_WASTE_REQUEST)(wasteRequest(input));
        expect(gen.next().value).toEqual(call(getWaste));
        expect(gen.next(fakeWasteData).value).toEqual(put(addSearchResults(filteredResults)))
    });
});