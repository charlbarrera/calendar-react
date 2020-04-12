import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/root';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './middlewares';


const sagaMiddleware = createSagaMiddleware();



export default function configureStore() {
    // Create the store with a middleware
    // 1. sagaMiddleware: Makes redux-sagas work
    const middlewares = [sagaMiddleware];
    
    const enhancers = [
        applyMiddleware(...middlewares)
    ];

    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    const composeEnhancers = typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    

    const store = createStore(rootReducer(), {}, composeEnhancers(...enhancers));

    sagaMiddleware.run(rootSaga)
    return store;
}