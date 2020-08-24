import { devToolsEnhancer } from 'redux-devtools-extension'
import { createStore } from 'redux'
import testReducer from '../../features/sandbox/testReducer'

export function configureStore() {
  return createStore(testReducer, devToolsEnhancer())
}
