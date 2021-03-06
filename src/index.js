import React from 'react'
import { render } from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App'
import rootReducer from './reducers'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register();
