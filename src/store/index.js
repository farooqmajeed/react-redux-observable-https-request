import { createStore } from 'redux'
import { combineReducers, applyMiddleware} from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import userReducer from './reducers/userReducer'

export const rootEpic = combineEpics(
    userEpic.getUserData,

)

const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware);
let Store = createStore(rootReducer, createStoreWithMiddleware)

store.subscribe(() =>
   console.log(store.getState())
 );
 export default store;