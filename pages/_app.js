import { Provider } from 'react-redux'
import { persistor, store } from '../redux/store'
import { PersistGate } from 'redux-persist/lib/integration/react'

import initNoty from '../helpers/init-noty'
import initAxios from '../helpers/init-axios'

import '../styles/globals.css'

initNoty()
initAxios(store.dispatch)

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
