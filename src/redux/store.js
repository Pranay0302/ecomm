import { createStore } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// redux-devtools for better vision
const store = createStore(reducer, composeWithDevTools());

export default store;