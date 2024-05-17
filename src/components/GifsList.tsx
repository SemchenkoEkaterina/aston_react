import PropTypes from 'prop-types'
import { Row } from 'react-bootstrap'
import { GifsProps } from '../type/type'
import GifCard from './GifCard'

const GifList = ({ gifs }: GifsProps) => {
  return (
    <Row xs={1} md={3} className="g-4">
      {gifs.map((item) => {
        return <GifCard gif={item} key={item.id} />
      })}
    </Row>
  )
}

GifList.propTypes = {
  gifs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      images: PropTypes.object.isRequired,
      alt_text: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default GifList
