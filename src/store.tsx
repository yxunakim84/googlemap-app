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
const initialState : dataType = {
  name: '',
  reviews: [],
  photos: [],
  formatted_address: "",
  formatted_phone_number: "",
  website: "",
  rating: 0,
  geometry: [],
  wheelchair_accessible_entrance: "",
  current_opening_hours: 0,
};

let data = createSlice({
  name: 'result',
  // initialState: {data: ""},
  initialState,
  reducers : {
    loadData(state, data) {
       return data.payload;
      // state.data = data.payload;
      // state.data.name = '내맘대로';
      // console.log('들어온 데이터', state.data);
    },
    EditData(state, input) {
      
    }
  }
})

export default configureStore({
  reducer: {
    data: data.reducer,
  }
})

export let { loadData } = data.actions