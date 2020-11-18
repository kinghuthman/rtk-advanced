import { combineReducers } from '@reduxjs/toolkit'
import issuesDisplayReducer from 'features/issuesDisplay/issuesDisplaySlice'

const rootReducer = combineReducers({
  issuesDisplay: issuesDisplayReducer
})

/* whatever gets returned from our root reducer, our type for whenever we 
access the state through mapState or useSelector */
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
