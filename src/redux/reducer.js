import { combineReducers } from 'redux';
import sliceReducer from './slices/slices.reducer';

const reducer = combineReducers({
    shop: sliceReducer
});

export default reducer;