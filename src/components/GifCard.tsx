import PropTypes from 'prop-types'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GifProp } from '../type/type'
import FavoriteButton from './FavoriteButton'

const GifCard = ({ gif, children }: GifProp) => {
  return (
    <Col key={gif.id}>
      <Card>
        <Link to={`/gifs/${gif.id}`}>
          <Card.Img variant="top" src={gif.images.original.url} />
        </Link>
        <Card.Body
          style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Card.Title>{gif.title}</Card.Title>
          <FavoriteButton gifId={gif.id} />
        </Card.Body>
        <Card.Text>{children}</Card.Text>
      </Card>
    </Col>
  )
}

GifCard.propTypes = {
  gif: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      images: PropTypes.object.isRequired,
      alt_text: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default GifCard
