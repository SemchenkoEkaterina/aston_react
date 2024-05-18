import { useParams } from 'react-router-dom'
import { useGetGifByIdQuery } from '../store/api/gifApi'
import FavoriteButton from '../components/FavoriteButton'
import PropTypes from 'prop-types'
import GifCard from '../components/GifCard'

const Card = () => {
  const { id } = useParams<{ id: string }>()
  const {
    data: gif,
    error,
    isLoading,
  } = useGetGifByIdQuery(id || '', {
    skip: !id,
  })

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error: Error message</p>
  }

  return (
    <div style={{ width: '18rem' }}>
      <GifCard gif={gif.data} key={gif.data.id}>
        <p>{gif.data.alt_text}</p>
      </GifCard>
    </div>
  )
}

Card.propTypes = {
  gif: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    alt_text: PropTypes.string.isRequired,
    images: PropTypes.shape({
      original: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }),
}

export default Card
