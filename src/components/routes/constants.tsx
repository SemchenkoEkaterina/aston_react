import {
  HOME_ROUTE,
  SEARCH_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  FAVORITE_ROUTE,
  HISTORY_ROUTE,
} from '../../utils/const'
import { lazy } from 'react'

const Auth = lazy(() => import('../../pages/Auth'))
const Card = lazy(() => import('../../pages/Card'))
const Home = lazy(() => import('../../pages/Home'))
const Favorite = lazy(() => import('../../pages/Favorite'))
const History = lazy(() => import('../../pages/History'))
const Registration = lazy(() => import('../../pages/Registration'))
const Search = lazy(() => import('../../pages/Search'))

export const routes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: HOME_ROUTE + '/gifs/:id',
    Component: Card,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Registration,
  },
  {
    path: SEARCH_ROUTE,
    Component: Search,
  },
]

export const authRoutes = [
  {
    path: FAVORITE_ROUTE,
    Component: Favorite,
  },
  {
    path: HISTORY_ROUTE,
    Component: History,
  },
]
