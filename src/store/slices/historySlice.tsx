import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  urls: [],
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistory(state, action) {
      state.urls = action.payload
    },
    removeFromHistory(state, action) {
      state.urls = state.urls.filter((url: string) => {
        return url !== action.payload
      })
    },
  },
})

export const { setHistory, removeFromHistory } = historySlice.actions
