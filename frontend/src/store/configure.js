import { createStore, applyMiddleware, compose } from 'redux';
import penderMiddleware from 'redux-pender';
import modules from './modules';

const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.devToolsExtension 
  ? window.devToolsExtension
  : () => fn => fn;


const configureStore = (initialState) => {

  const enhancers = [
    applyMiddleware(
      penderMiddleware()
    ), 
    devtools()
  ];

  const store = createStore( modules, initialState, compose(...enhancers));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules', () => store.replaceReducer(modules));
  }

  console.log('store : ', store)

  return store;
}

export default configureStore;