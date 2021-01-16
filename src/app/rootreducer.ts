import { combineReducers } from '@reduxjs/toolkit'

import issuesDisplayReducer from 'features/issuesDisplay/issuesDisplaySlice'
import repoDetailsReducer from 'features/repoSearch/repoDetailsSlice'
import issuesReducer from 'features/issuesList/issuesSlice'

const rootReducer = combineReducers({
  issuesDisplay: issuesDisplayReducer,
  repoDetails: repoDetailsReducer,
  issues: issuesReducer
})

/* whatever gets returned from our root reducer, our type for whenever we 
access the state through mapState or useSelector */
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
