import { configureStore } from '@reduxjs/toolkit'
import { gifApi } from './api/gifApi'
import { importedListenerMiddleware } from './middleware/userMiddleware'
import { favoriteSlice } from './slices/favoriteSlice'
import { historySlice } from './slices/historySlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    favorites: favoriteSlice.reducer,
    history: historySlice.reducer,
    [gifApi.reducerPath]: gifApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(gifApi.middleware)
      .prepend(importedListenerMiddleware.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
