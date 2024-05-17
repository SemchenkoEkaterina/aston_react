import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { addHistory } from '../utils/history'
import useDebounce from '../hooks/useDebounce.hook'
import SearchList from './SerchList'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../hooks/useAuth.hook'
import { SearchBarProps } from '../type/type'

const SearchBar = ({ value }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState(value)
  const navigate = useNavigate()
  const { userId } = useAuth()
  const [showSuggests, setShowSuggests] = useState(false)
  const debouncedInputValue = useDebounce(inputValue, 700)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  const onFocus = () => {
    setShowSuggests(true)
  }
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  const handleIconClick = () => {
    handleSearch()
  }

  const handleSearch = () => {
    if (inputValue.trim() === '') {
      navigate('/search')
    } else {
      const searchUrl = `/search?q=${encodeURIComponent(inputValue)}`
      navigate(searchUrl)
      if (!userId) {
        return
      }
      addHistory(searchUrl, userId)
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setShowSuggests(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="bg-slate-200 flex justify-center">
      <div className="w-1/4 relative" ref={inputRef}>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={inputValue}
            onChange={handleChange}
            onFocus={onFocus}
            onKeyDown={handleKeyPress}
          />
          <Button variant="outline-success" onClick={handleIconClick}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </Form>
        <div className="absolute w-full bg-lime-300 rounded z-10">
          {showSuggests && inputValue && (
            <SearchList searchInput={debouncedInputValue} />
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchBar
