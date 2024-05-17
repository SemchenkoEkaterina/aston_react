import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Suggest, Query, ImagesFix } from '../../type/type'

export const gifApi = createApi({
  reducerPath: 'gifApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.giphy.com/v1/gifs/' }),
  endpoints: (builder) => ({
    getAllGifs: builder.query({
      query: ({ api_key, limit, offset }) => ({
        url: 'trending/',
        params: { api_key, limit, offset },
      }),
    }),
    getGifById: builder.query({
      query: ({ api_key, id }) => `${id}?api_key=${api_key}`,
    }),
    getGifsById: builder.query({
      query: ({ api_key, id }) => `?ids=${id}&api_key=${api_key}`,
    }),
    getFilteredGifsByName: builder.query({
      query: ({ api_key, name }) => `search/?q=${name}&api_key=${api_key}`,
    }),
    getSuggests: builder.query<Suggest[], Query>({
      query: ({ api_key, searchInput }) =>
        `search?q=${searchInput}&api_key=${api_key}`,
      transformResponse: (response): Suggest[] => {
        const res = response as {
          data: { id: string; title: string; images: ImagesFix }[]
        }

        return res.data.map((result) => ({
          id: result.id,
          title: result.title,
          images: result.images,
        }))
      },
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
