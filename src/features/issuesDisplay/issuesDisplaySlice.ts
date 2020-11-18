import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CurrentDisplay {
  displayType: 'issues' | 'comments'
  issueId: number | null
}

interface CurrentDisplayPayload {
  displayType: 'issues' | 'comments'
  issueId?: number
}

interface CurrentRepo {
  org: string
  repo: string
}

// syntax to append an interface to a type
type CurrentDisplayState = {
  page: number
} & CurrentDisplay &
  CurrentRepo

  // state type is based on initialState
let initialState: CurrentDisplayState = {
  org: 'rails',
  repo: 'rails',
  page: 1,
  displayType: 'issues',
  issueId: null
}

const issuesDisplaySlice = createSlice({
  name: 'issuesDisplay',
  initialState,
  reducers: {
    // PayloadAction is the main type we'll use when declaring action types in reducers
    displayRepo(state, action: PayloadAction<CurrentRepo>) {
      const { org, repo } = action.payload
      state.org = org
      state.repo = repo
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    setCurrentDisplayType(state, action: PayloadAction<CurrentDisplayPayload>) {
      const { displayType, issueId = null } = action.payload
      state.displayType = displayType
      state.issueId = issueId
    }
  }
})

// initializing here? declaring const on the variables in this manner is new to me
export const {
  displayRepo,
  setCurrentDisplayType,
  setCurrentPage
} = issuesDisplaySlice.actions

export default issuesDisplaySlice.reducer
