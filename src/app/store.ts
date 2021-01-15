import { configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

import rootReducer, { RootState } from './rootReducer'

const store = configureStore({
  reducer: rootReducer
})

if (process.env.NODE_ENV === 'development' && module.hot) {
  // CommonJS synchronous import syntax
  module.hot.accept('./rootReducer', () => {
    // "default export" is in an object field called default
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })
}

export type AppDispatch = typeof store.dispatch

/**
 * thunks allow us to write reusable logic that ineteracts with a redux store
 *  withoout the need to reference a specific store instance
 * thunks enable us to move more complex logic outside of components
 * from a component's pov, it doesnt care whether it's dispatching a plain action or
 *  kicking off some async logic - it just calls dispatch(doSomething()) and moves on
 * thunks can return values like promises, allowing logic inside the component
 *  to wait for something else to finish
 *
 * redux toolkit does not provide special functions or syntax for writing thunk functions
 *
 * typical redux app, thunk action creators are usally defined in an "actions" file
 *  alongside the plain action creators
 * thunks typically dispatch plain actions
 */
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

/**
 * AppThunk type declares that the "action" thaty we're using is specifically a thunk function.
 * The thunk is customized with some additional type parameters
 *  - return value: the thunk doesn't return anything
 *  - state type for getState: returns our RootState type
 *  - "Extra argument": the thunk middleware can be customized to pass in an extra value, (not here)
 *  - Action types accepted by dispatch: any action whose type is a string
 *
 *  - most common settings to avoid repeating that same type declaration everytime we write a thunk
 */

export default store
