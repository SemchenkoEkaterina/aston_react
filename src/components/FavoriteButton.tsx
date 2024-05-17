import { useState, useEffect } from 'react'
import { isFavorite, addFavorite, removeFavorite } from '../utils/favorite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavorite } from '../store/slices/favoriteSlice'
import { useAuth } from '../hooks/useAuth.hook'
import { Button } from 'react-bootstrap'
import { FavoriteButtonProps } from '../type/type'

const FavoriteButton = ({ gifId }: FavoriteButtonProps) => {
  const [isFavorited, setIsFavorited] = useState(false)
  const { userId } = useAuth()
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchIsFavorite = async () => {
      const favorite = await isFavorite(gifId, userId)
      setIsFavorited(favorite || false)
    }
    if (!userId) {
      return
    }
    fetchIsFavorite()
  }, [gifId, userId])

  const handleToggleFavorite = async () => {
    if (isFavorited) {
      await removeFavorite(gifId, userId)
      dispatch(removeFromFavorite(gifId))
      setIsFavorited(false)
    } else {
      await addFavorite(gifId, userId)
      setIsFavorited(true)
    }
  }
  if (!userId) {
    return null
  }

  return (
    <Button variant="outline-success" onClick={handleToggleFavorite}>
      <FontAwesomeIcon
        icon={faStar}
        size="xs"
        style={{ color: isFavorited ? 'red' : 'grey' }}
        className=" absolute top-1 right-1 size-7 cursor-pointer"
      />
    </Button>
  )
}

export default FavoriteButton
