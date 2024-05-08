import { auth } from '../firebase'
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { Dispatch } from 'redux'
import { removeUser, setUser } from '../store/slices/userSlice'

export const loginWithEmailAndPassword = async (
  email: string,
  password: string,
  dispatch: Dispatch,
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }),
      )
    })
  } catch (error) {
    alert('Error logging in:')
  }
}
export const signUpWithEmailAndPassword = async (
  email: string,
  password: string,
  dispatch: Dispatch,
) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(
      ({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        )
      },
    )
  } catch (error) {
    alert('Error registering:')
  }
}

export const logoutService = async (dispatch: Dispatch) => {
  try {
    dispatch(removeUser())
    return await signOut(auth)
  } catch (error) {
    alert('Ошибка при выходе')
  }
}

export const subscribeToAuthChanges = (
  setUser: (user: User | null) => void,
) => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    setUser(user)
  })

  return unsubscribe
}
