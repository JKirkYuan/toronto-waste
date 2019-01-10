import ResultReducer from './reducer_results';
import { ADD_SEARCH_RESULT, CLEAR_WASTE_RESULTS, AddSearchResultsParams, ClearWasteResultsParams, WasteData } from '../actions/index';

describe('results_reducer', () => {
    describe('ADD_SEARCH_RESULT', () => {
        it('shoudld return the correct state', () => {
            const fakeWasteDataList: WasteData[] = [
                {
                    body: '&lt;ul&gt; \n &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;',
                    category: 'Garbage',
                    title: 'Garbage (wrapping and tying)',
                    keywords: 'bread bag tag, milk bag tag, elastic band'
                },
                {
                    body: '&lt;ul&gt; \n &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;',
                    category: 'Blue Bin',
                    title: 'Blue Bin (metal lid)',
                    keywords: 'glass'
                },
            ];
            const expectedState: WasteData[] = [
                {
                    body: '&lt;ul&gt; \n &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;',
                    category: 'Garbage',
                    title: 'Garbage (wrapping and tying)',
                    keywords: 'bread bag tag, milk bag tag, elastic band'
                },
                {
                    body: '&lt;ul&gt; \n &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;',
                    category: 'Blue Bin',
                    title: 'Blue Bin (metal lid)',
                    keywords: 'glass'
                },
            ];
            const action: AddSearchResultsParams = { type: ADD_SEARCH_RESULT, payload: fakeWasteDataList};
            expect(ResultReducer(undefined, action)).toEqual(expectedState);
        });
        it('should overwrite the old data from waste list', () => {
            const fakeWasteDataList: WasteData[] = [
                {
                    body: '&lt;ul&gt; \n &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;',
                    category: 'Garbage',
                    title: 'Garbage (wrapping and tying)',
                    keywords: 'bread bag tag, milk bag tag, elastic band'
                },
                {
                    body: '&lt;ul&gt; \n &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;',
                    category: 'Blue Bin',
                    title: 'Blue Bin (metal lid)',
                    keywords: 'glass'
                },
            ];
            const expectedState: WasteData[] = [
                {
                    body: '&lt;ul&gt; \n &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;',
                    category: 'Garbage',
                    title: 'Garbage (wrapping and tying)',
                    keywords: 'bread bag tag, milk bag tag, elastic band'
                },
                {
                    body: '&lt;ul&gt; \n &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;',
                    category: 'Blue Bin',
                    title: 'Blue Bin (metal lid)',
                    keywords: 'glass'
                },
            ];
            const oldState: WasteData[] = [
                {
                    body: '&lt;ul&gt; \n &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;',
                    category: 'Blue Bin',
                    title: 'Blue Bin (metal lid)',
                    keywords: 'glass'
                },
            ]
            const action: AddSearchResultsParams = { type: ADD_SEARCH_RESULT, payload: fakeWasteDataList};
            expect(ResultReducer(oldState, action)).toEqual(expectedState);
        });
    });
    describe('CLEAR_WASTE_RESULT', () => {
        it('should clear all data from waste list', () => {
            const fakeWasteDataList: WasteData[] = [
                {
                    body: '&lt;ul&gt; \n &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;',
                    category: 'Garbage',
                    title: 'Garbage (wrapping and tying)',
                    keywords: 'bread bag tag, milk bag tag, elastic band'
                },
                {
                    body: '&lt;ul&gt; \n &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;',
                    category: 'Blue Bin',
                    title: 'Blue Bin (metal lid)',
                    keywords: 'glass'
                },
            ];
            const expectedState: WasteData[] = [];
            const action: ClearWasteResultsParams = { type: CLEAR_WASTE_RESULTS };
            expect(ResultReducer(fakeWasteDataList, action)).toEqual(expectedState);
        });
        it('should clear empty waste list', () => {
            const expectedState: WasteData[] = [];
            const action: ClearWasteResultsParams = { type: CLEAR_WASTE_RESULTS };
            expect(ResultReducer(undefined, action)).toEqual(expectedState);
        });
    });
});