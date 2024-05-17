import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import { getDocs, collection, Firestore } from 'firebase/firestore'
import { db } from '../../firebase'
import {
  setFavorite,
  removeFromFavorite,
} from '../../store/slices/favoriteSlice'
//import { setHistory, removeFromHistory } from '../../store/slices/historySlice'
import { setUser, removeUser } from '../../store/slices/userSlice'
import { PayloadAction } from '@reduxjs/toolkit'

type MyPayloadType = {
  email: string
  token: string
  id: string
}

export const importedListenerMiddleware = createListenerMiddleware()

importedListenerMiddleware.startListening({
  matcher: isAnyOf(setUser),
  effect: async (action: PayloadAction<MyPayloadType>, listenerApi) => {
    const id = action.payload.id
    if (!id) {
      return
    }
    try {
      const favoriteIdsSnapshot = await getDocs(
        collection(db, `users/${id}/favorites`),
      )
      const favoriteIds = favoriteIdsSnapshot.docs.map((doc) => doc.data().id)

      listenerApi.dispatch(setFavorite(favoriteIds))
    } catch (error) {
      alert('Error fetching user data')
    }
  },
})

importedListenerMiddleware.startListening({
  matcher: isAnyOf(removeUser),
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(setFavorite([]))
    listenerApi.dispatch(removeFromFavorite(''))
  },
})

export default importedListenerMiddleware.middleware
