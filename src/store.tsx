import { configureStore, createSlice } from '@reduxjs/toolkit'

interface dataType {
  name: string,
  reviews: string[],
  photos: photosType[],
  formatted_address: string,
  formatted_phone_number: string,
  website: string,
  rating: number,
  geometry: string[],
  wheelchair_accessible_entrance: string,
  current_opening_hours: number,
}

interface photosType {
  photo_reference: string,
}

let data = createSlice({
  name: 'result',
  // initialState: {
  //   data: ''
  // },
  initialState: {data: ""},
  reducers : {
    loadData(state, data) {
      state.data = data.payload
      console.log('들어온 데이터', state.data);
    },
  }
})

export default configureStore({
  reducer: {
    data: data.reducer,
  }
})

export let { loadData } = data.actions