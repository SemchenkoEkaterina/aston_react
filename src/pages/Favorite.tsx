import { useGetGifsByIdQuery } from '../store/api/gifApi'
import { useSelector } from 'react-redux'
import { selectFavoriteIds } from '../store/selector'
import useFavoritesData from '../hooks/favorite.hook'
import GifList from '../components/GifsList'

const Favorite = () => {
  const { loading } = useFavoritesData()
  const favoriteIds = useSelector(selectFavoriteIds)
  const { data: gifs } = useGetGifsByIdQuery(favoriteIds)

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ul>
          {gifs?.data ? (
            <GifList gifs={gifs.data} />
          ) : (
            <p>Нет избранных персонажей</p>
          )}
        </ul>
      )}
    </div>
  )
}

export default Favorite
