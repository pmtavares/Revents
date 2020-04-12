import { createStore, applyMiddleware } from "redux";
import rootReducer from '../../app/reducers/rootReducer'
import {devToolEnhancer, composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';

const configureStore = () => {

    const middlewares = [thunk]
    const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

    const store = createStore(rootReducer, composedEnhancer)
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    return store;
}

export default configureStore;