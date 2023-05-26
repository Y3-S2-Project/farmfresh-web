import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  addresses: [],
  map_modal: false,
}

const mapsSlice = createSlice({
  name: 'maps',
  initialState,
  reducers: {
    mapModalOpen: (state, action) => {
      state.map_modal = action.payload.open
      state.addresses = action.payload?.addresses || []
    },
  },
})

export const { mapModalOpen } = mapsSlice.actions

export const map_modal = (state) => state.maps.map_modal
export const addresses = (state) => state.maps.addresses

export default mapsSlice.reducer
