import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import recepiesSlice from './recepiesSlice'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whiteList: ['recepies']
}

const reducer = combineReducers({
    recepies: recepiesSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const persistor = persistStore(store)

export const recepiesActions = recepiesSlice.actions