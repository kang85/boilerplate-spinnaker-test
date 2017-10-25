import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as AuthAPI from 'lib/api/auth';

// action types
const LOCAL_LOGIN  = 'auth/LOCAL_LOGIN';

// action creator
export const localLogin = createAction(LOCAL_LOGIN, AuthAPI.localLogin); // ({email, password})

// initial state
const initialState = Map({
  modal: Map({
    visible: false,
    mode: 'login'
  }),
  form: Map({
    email: '',
    password: ''
  }),
  error: null,
  loginResult: null,
  socialInfo: null,
  redirectToRegister: false
});

// reducer
export default handleActions({
    ...pender({
      type: LOCAL_LOGIN,
      onSuccess: (state, action) => {
        const { data: loginResult } = action.payload;
        return state.set('loginResult', loginResult);
      },
      onFailure: (state, action) => {
        return state.set('error', fromJS({
          localLogin: ['잘못된 계정 정보입니다.']
        }))
      }
    }),
}, initialState);