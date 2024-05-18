import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectHistoryUrls, selectUser } from '../store/selector'
import { removeFromHistory, setHistory } from '../store/slices/historySlice'
import { fetchHistoryUrl, removeHistory } from '../utils/history'
import { useAuth } from './useAuth.hook'

const useHistoryData = () => {
  const { userId } = useAuth()
  const dispatch = useDispatch()
  useEffect(() => {
    const loadHistory = async () => {
      const urls = await fetchHistoryUrl(userId)
      dispatch(setHistory(urls))
    }
    loadHistory()
  }, [userId, dispatch])

  const currentUrl = useSelector(selectHistoryUrls)

  const onDelete = async (url: string) => {
    await removeHistory(url, userId)
    dispatch(removeFromHistory(url))
  }

  return { currentUrl, onDelete }
}

export default useHistoryData
