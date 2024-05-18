import { useEffect, useState } from 'react'
import { Row, Container } from 'react-bootstrap'
import GifList from '../components/GifsList'
import { useGetAllGifsQuery } from '../store/api/gifApi'
import SearchBar from '../components/SearchBar'

const Home = () => {
  const {
    data: allGifs,
    error: allGifsError,
    isLoading: allGifsLoading,
  } = useGetAllGifsQuery({
    limit: 20,
    offset: 1,
  })
  const [searchState, setSearchState] = useState('')
  const [items, setItems] = useState([])
  // using use effect to sync data from api with state
  useEffect(() => {
    if (!allGifs) return

    setItems(allGifs.data)
  }, [allGifs])

  const handleChange = (value: string) => {
    setSearchState(value)
  }
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <SearchBar value={searchState} onChange={handleChange} />
        </Row>
        <Row>
          <GifList gifs={items} />
        </Row>
      </Container>
    </>
  )
}

export default Home
