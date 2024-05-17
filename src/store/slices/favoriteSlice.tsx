import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  ids: [],
}

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorite(state, action) {
      state.ids = action.payload
    },
    removeFromFavorite(state, action) {
      state.ids = state.ids.filter((id: string) => {
        return id !== action.payload
      })
    },
  },
})

export const { setFavorite, removeFromFavorite } = favoriteSlice.actions
