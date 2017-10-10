import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import * as Api from './Api';
import PatientReducer from './Reducer/PatientReducer';
import { reducer as formReducer } from 'redux-form';

export default () => 
    createStore(combineReducers({
        p: PatientReducer,
        form: formReducer
    }),
    applyMiddleware(promise(), thunk.withExtraArgument({ Api })));