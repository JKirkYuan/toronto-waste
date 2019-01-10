import FavoriteReducer from './reducer_favorites';
import { WasteData, AddToFavoritesParams, ADD_TO_FAVORITES, RemoveFromFavoritesParams, REMOVE_FROM_FAVORITES } from '../actions/index';

describe('favorite_reducer', () => {
    describe('ADD_TO_FAVORITES', () => {
        it('should add new waste to favorites', () => {
            const fakeWasteDataToAdd: WasteData = {
                body: '&lt;ul&gt; \n &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;',
                category: 'Garbage',
                title: 'Garbage (wrapping and tying)',
                keywords: 'bread bag tag, milk bag tag, elastic band'
            };
            const expectedState: WasteData[] = [
                {
                    body: '&lt;ul&gt; \n &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;',
                    category: 'Garbage',
                    title: 'Garbage (wrapping and tying)',
                    keywords: 'bread bag tag, milk bag tag, elastic band'
                }
            ];
            const action: AddToFavoritesParams = { type: ADD_TO_FAVORITES, payload: fakeWasteDataToAdd };
            expect(FavoriteReducer(undefined, action)).toEqual(expectedState);
        });
    });
    describe('REMOVE_FROM_FAVORITES', () => {
        it('should remove waste data from favorites list', () => {
            const fakeWasteDataToRemove: string = 'Garbage (wrapping and tying)';
            const oldState: WasteData[] = [
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
                    category: 'Blue Bin',
                    title: 'Blue Bin (metal lid)',
                    keywords: 'glass'
                },
            ];

            const action: RemoveFromFavoritesParams = { type: REMOVE_FROM_FAVORITES, payload: fakeWasteDataToRemove };
            expect(FavoriteReducer(oldState, action)).toEqual(expectedState);
        });
    });
});