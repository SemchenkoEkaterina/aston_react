interface User {
  id: string
}

interface FavoritesState {
  ids: string[]
}
interface HistoryState {
  urls: string[]
}

export const selectUser = (state: { user: User }) => state.user
export const selectFavoriteIds = (state: { favorites: FavoritesState }) =>
  state.favorites.ids
export const selectHistoryUrls = (state: { history: HistoryState }) =>
  state.history.urls
