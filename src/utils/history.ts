import { doc, setDoc, deleteDoc, getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase'

export const addHistory = async (url: string, userId: string) => {
  if (userId) {
    const historyRef = doc(db, `users/${userId}/history${url}`)
    await setDoc(historyRef, { url: url })
  }
}

export const removeHistory = async (url: string, userId: string) => {
  if (userId) {
    const historyRef = doc(db, `users/${userId}/history${url}`)
    await deleteDoc(historyRef)
  }
}

export const fetchHistoryUrl = async (userId: string): Promise<string[]> => {
  try {
    const historyUrlSnapshot = await getDocs(
      collection(db, `users/${userId}/history`),
    )
    return historyUrlSnapshot.docs.map((doc) => doc.data().url)
  } catch (error) {
    alert(error)
    return []
  }
}
