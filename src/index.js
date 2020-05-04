import React from 'react'
import { render } from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App'
import rootReducer from './reducers'
import { polyfillLoader } from 'polyfill-io-feature-detection'
import { polyfill } from 'es6-promise'; polyfill()

polyfillLoader({
  "features": "Promise,fetch",
  "onCompleted": main
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

function main() {
  render (
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

serviceWorker.register();
