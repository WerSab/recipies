import { createStore, combineReducers } from 'redux'
import recepiesSlice from './recepiesSlice'

const reducer = combineReducers({
    recepies: recepiesSlice.reducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const recepiesActions = recepiesSlice.actions