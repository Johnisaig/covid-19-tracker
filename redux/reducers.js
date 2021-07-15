import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import dashboardReducer from './dashboard'

const rootConfig = {
  key: 'root',
  storage,
  blacklist: [],
}

const dashboardConfig = {
  key: 'dashboard',
  storage,
  blacklist: [],
}

export const rootReducer = combineReducers({
  dashboard: persistReducer(dashboardConfig, combineReducers(dashboardReducer)),
})

export default persistReducer(rootConfig, rootReducer)
