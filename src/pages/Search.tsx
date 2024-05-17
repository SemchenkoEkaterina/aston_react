import { useLocation } from 'react-router-dom'
import { useGetFilteredGifsByNameQuery } from '../store/api/gifApi'
import GifsList from '../components/GifsList'
import SearchBar from '../components/SearchBar'

const SearchPage = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const searchTerm = searchParams.get('q') || ''
  const { data, error, isLoading } = useGetFilteredGifsByNameQuery({
    api_key: process.env.REACT_APP_API_TOKEN,
    name: searchTerm,
  })
  return (
    <div>
      <SearchBar value={searchTerm} onChange={String} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: Такой персонаж не найден</p>}
      {data && <GifsList gifs={data.data} />}
    </div>
  )
}

export default SearchPage
