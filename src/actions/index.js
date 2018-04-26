import * as actionType from './ActionTypes';

export const addCounter = () => ({
    type: actionType.ADD_COUNTER,
    payload: 1
});