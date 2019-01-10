import configureStore from 'redux-mock-store';
import * as actions from './index';

const mockStore = configureStore();
const store = mockStore();

describe('actions', () => {
    beforeEach(() => {
        store.clearActions();
    });
    describe('request waste list', () => {
        it('should dispatch wasteRequest', () => {
            const expectedAction = [{
                type: actions.LOAD_WASTE_REQUEST,
                payload: 'test_waste'
            }];

            store.dispatch(actions.wasteRequest('test_waste'));
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
    describe('add search waste list', () => {
        it('should dispatch addSearchResults', () => {
            const fakeWasteData = [
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
            const expectedAction = [{
                type: actions.ADD_SEARCH_RESULT,
                payload: fakeWasteData
            }];

            store.dispatch(actions.addSearchResults(fakeWasteData));
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
    describe('clear waste results', () => {
        it('should dispatch clearWasteResults', () => {
            const expectedAction = [{
                type: actions.CLEAR_WASTE_RESULTS,
            }];

            store.dispatch(actions.clearWasteResults());
            expect(store.getActions()).toEqual(expectedAction);
        });
    })
    describe('add to favorites', () => {
        it('should dispatch addToFavorites', () => {
            const fakeWasteData = {
                body: '&lt;ul&gt; \n &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;',
                category: 'Blue Bin',
                title: 'Blue Bin (metal lid)',
                keywords: 'glass'
            };
            const expectedAction = [{
                type: actions.ADD_TO_FAVORITES,
                payload: fakeWasteData,
            }];

            store.dispatch(actions.addToFavorites(fakeWasteData));
            expect(store.getActions()).toEqual(expectedAction);
        });
    })
    describe('remove from favorites', () => {
        it('should dispatch removeFromFavorites', () => {
            const expectedAction = [{
                type: actions.REMOVE_FROM_FAVORITES,
                payload: 'test_waste_title',
            }];

            store.dispatch(actions.removeFromFavorites('test_waste_title'));
            expect(store.getActions()).toEqual(expectedAction);
        });
    })
});