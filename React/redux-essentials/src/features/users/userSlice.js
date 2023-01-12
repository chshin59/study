import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   id: '0', name: 'Tianna Jenkins'
// }
const initialState = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      const { user } = action.payload
      state.id = user.id
      state.name = user.name
    },
    logout(state, action) {
      state.id = ''
      state.name = ''
    },
  }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer