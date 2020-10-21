import { createStore, applyMiddleware, compose } from 'redux';
import reducer from "./reducer";
import thunk from 'redux-thunk';

//这样既支持windows redux中间件，同时也引入了redux thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    );

const store = createStore(
    reducer, enhancer
    //通过redux创建store时需要使用thunk这个中间件, __REDUX_DEVTOOLS_EXTENSION__也是中间件
);


export default store;
