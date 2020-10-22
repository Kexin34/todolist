import { createStore, applyMiddleware, compose } from 'redux';
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

//这样既支持windows redux中间件，同时也引入了redux thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancer);
//运行saga
sagaMiddleware.run(todoSagas);

export default store;
