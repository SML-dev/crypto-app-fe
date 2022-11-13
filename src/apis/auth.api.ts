import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginUserRequest } from '../dto/login-user-request.dto'
import { User } from '../models/User'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/auth',
  }),
  endpoints: (build) => ({
    login: build.mutation<User, LoginUserRequest>({
      query: (loginRequest) => ({
        url: '/login',
        method: 'POST',
        body: loginRequest,
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi
