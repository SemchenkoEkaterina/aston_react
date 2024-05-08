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
    component: <Home />,
  },
  {
    path: HOME_ROUTE + '/:id',
    component: <Card />,
  },
  {
    path: LOGIN_ROUTE,
    component: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    component: <Registration />,
  },
  {
    path: SEARCH_ROUTE,
    component: <Search />,
  },
]

export const authRoutes = [
  {
    path: FAVORITE_ROUTE,
    component: <Favorite />,
  },
  {
    path: HISTORY_ROUTE,
    component: <History />,
  },
]
