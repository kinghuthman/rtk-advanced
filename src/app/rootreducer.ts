import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({})

/* whatever gets returned from our root reducer, our type for whenever we 
access the state through mapState or useSelector */
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
