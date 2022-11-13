import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../models/User'
import { RootState } from '../../app/store'

interface AuthState {
  user?: User
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {} as AuthState,
  reducers: {
    setAuthState: (state, { payload: { user } }: PayloadAction<AuthState>) => {
      state.user = user
    },
  },
})

export const { setAuthState } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
