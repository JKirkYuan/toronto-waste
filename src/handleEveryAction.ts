import { Action } from 'redux';

type IHandleEvery = {
    [key: string]: Function;
};

let handleEveryMap: IHandleEvery;

export function addHandleEvery(handlers: IHandleEvery) {
    handleEveryMap = {
        ...handleEveryMap,
        ...handlers,
    }
}

export function* handleEveryAction(action: Action) {
    try {
        const fn = handleEveryMap[action.type];
		if (fn) {
			yield fn(action);
		}
    } catch (e) {
        console.group("Error handling action: ", action.type);
        console.error("error: ", e);
        console.log("action: ", action);
        console.groupEnd();
    }
}
