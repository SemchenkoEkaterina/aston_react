import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Suggest, SuggestResponse } from '../../types'

const key_api = process.env.REACT_APP_API_TOKEN
export const gifApi = createApi({
  reducerPath: 'gifApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.giphy.com/v1/gifs/' }),
  endpoints: (builder) => ({
    getAllGifs: builder.query({
      query: ({ limit, offset }) => ({
        url: 'trending/',
        params: { api_key: key_api, limit, offset },
      }),
    }),
    getGifById: builder.query({
      query: (id) => `${id}?api_key=${key_api}`,
    }),
    getGifsById: builder.query({
      query: (id) => `?ids=${id}&api_key=${key_api}`,
    }),
    getFilteredGifsByName: builder.query({
      query: (name) => `search/?q=${name}&api_key=${key_api}`,
    }),
    getSuggests: builder.query<Suggest[], string>({
      query: (searchInput) => `search?q=${searchInput}&api_key=${key_api}`,
      transformResponse: (response: SuggestResponse): Suggest[] =>
        response.data.map((result) => ({
          id: result.id,
          title: result.title,
          images: result.images,
        })),
    }),
  }),
})

export const {
  useGetAllGifsQuery,
  useGetGifByIdQuery,
  useGetGifsByIdQuery,
  useGetFilteredGifsByNameQuery,
  useGetSuggestsQuery,
} = gifApi
