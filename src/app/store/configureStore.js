import { createStore } from "redux";
import rootReducer from '../../app/reducers/rootReducer'
import devToolEnhancer from 'redux-devtools-extension'

const configureStore = () => {
    const store = createStore(rootReducer, devToolEnhancer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    return store;
}

export default configureStore;