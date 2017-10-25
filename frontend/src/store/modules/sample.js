import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { Map } from 'immutable';

const SOMETHING_DO = 'sample/SOMETHING_DO';
const DATA_FETCH = 'sample/DATA_FETCH';

function fakeFetch(payload) {
    console.log("fakeFetch - payload : ", payload)
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve({ result: payload });
        }, 500);
    });
}

export const doSomething = createAction(SOMETHING_DO);

export const fetchData = createAction(DATA_FETCH, fakeFetch);

const initialState = Map({
    pending: Map({
        fetchData: false
    }),
    something: null,
    result: null
});

export default handleActions({
    // sample action handler
    [SOMETHING_DO]: (state, action) => {
        return state.set('something', 'done');
    },

    ...pender({
        type: DATA_FETCH,
        onSuccess: (state, action) => {
            return state.set('result', action.payload.result);
        },
        onFailure: (state, action) => {
            return state.set('result', action.payload.result);
        }
    })

}, initialState);