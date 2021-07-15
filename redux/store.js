import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'

import thunk from 'redux-thunk'

import reducers from './reducers'
import notificationMiddleware from './middlewares/notification.middleware'

const createPersistentStore = () => {
  const middlewares = [thunk, notificationMiddleware]

  const enhancedMiddlewares = composeWithDevTools(
    applyMiddleware(...middlewares),
  )

  const store = createStore(reducers, {}, enhancedMiddlewares)

  const persistor = persistStore(store)

  return { persistor, store }
}

export const { store, persistor } = createPersistentStore()
