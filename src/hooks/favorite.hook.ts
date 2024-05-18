import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFavorite } from '../store/slices/favoriteSlice'
import { fetchFavoriteIds } from '../utils/favorite'
import { useAuth } from './useAuth.hook'

const useFavoritesData = () => {
  const [loading, setLoading] = useState(true)
  const { userId } = useAuth()
  const dispatch = useDispatch()

  const loadFavorites = async (userId: string) => {
    setLoading(true)
    try {
      const ids = await fetchFavoriteIds(userId)
      dispatch(setFavorite(ids))
    } catch (error) {
      alert('Error fetching favorites')
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    loadFavorites(userId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  return { loading }
}

export default useFavoritesData
