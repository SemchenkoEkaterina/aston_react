import {
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs,
  collection,
} from 'firebase/firestore'
import { db } from '../firebase'

export const addFavorite = async (id: string, userId: string) => {
  if (userId) {
    const favoriteRef = doc(db, `users/${userId}/favorites/${id}`)
    await setDoc(favoriteRef, { id: id })
  }
}

export const removeFavorite = async (id: string, userId: string) => {
  if (userId) {
    const favoriteRef = doc(db, `users/${userId}/favorites/${id}`)
    await deleteDoc(favoriteRef)
  }
}

export const isFavorite = async (
  id: string,
  userId: string,
): Promise<boolean | undefined> => {
  if (userId) {
    const favoriteRef = doc(db, `users/${userId}/favorites/${id}`)
    const docSnap = await getDoc(favoriteRef)
    return docSnap.exists()
  }
}

export const fetchFavoriteIds = async (userId: string): Promise<string[]> => {
  try {
    const favoriteIdsSnapshot = await getDocs(
      collection(db, `users/${userId}/favorites`),
    )
    return favoriteIdsSnapshot.docs.map((doc) => doc.data().id)
  } catch (error) {
    alert(error)
    return []
  }
}
