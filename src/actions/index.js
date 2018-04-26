import * as actionType from './ActionTypes';

export const addCounter = () => ({
    type: actionType.ADD_COUNTER,
    payload: 1
});

export const removeCounter = () => ({
    type: actionType.REMOVE_COUNTER,
    payload: 1
});