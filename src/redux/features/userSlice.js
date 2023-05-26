import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginUser, logoutUser } from '../../services/user'

const initialState = {
  loading: false,
  user: null,
  error: '',
}

export const login = createAsyncThunk(
  'user/loginUser',
  async (credentials) => (await loginUser(credentials)).data,
)
export const logout = createAsyncThunk('user/logoutUser', logoutUser)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload
      localStorage.setItem('token', action.payload?.data?.access_token)
    })
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
    builder.addCase(logout.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(logout.fulfilled, (state, action) => {
      state.loading = false
      state.user = null
    })
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export const isLoading = (state) => state.user.loading
export const getCurrentUser = (state) => state.user.user?.data?.user
export const getAccessToken = (state) => state.user.user?.data?.access_token
export const getLoginMessage = (state) => state.user.user.message

export default userSlice.reducer
