import { configureStore, createSlice } from '@reduxjs/toolkit'

interface dataType {
  name: string,
  reviews: string[],
  photos: photosType[],
  formatted_address: string,
  formatted_phone_number: string,
  website: string,
  rating: number,
  geometry: {
    location: {
      lat: number,
      lng: number,
    }
  },
  wheelchair_accessible_entrance: boolean,
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
  geometry: {
    location: {
      lat: 0,
      lng: 0,
    }
  },
  wheelchair_accessible_entrance: false,
  current_opening_hours: 0,
};

let data = createSlice({
  name: 'result',
  initialState,
  reducers : {
    loadData(state, data) {
       return data.payload;
    },
    EditName(state, input) {
      state.name = input.payload;
    },
    EditWebsite(state, input) {
      state.website = input.payload;
    },
    EditAddress(state, input) {
      state.formatted_address = input.payload;
    },
    EditContact(state, input) {
      state.formatted_phone_number = input.payload;
    },
    EditWheelchair(state, input) {
      state.wheelchair_accessible_entrance = input.payload;
    },
    EditRate(state, input) {
      state.rating = input.payload;
    },
    EditLocation(state, input) {
      [state.geometry.location.lat, state.geometry.location.lng] = input.payload;
    }
  }
})

export default configureStore({
  reducer: {
    data: data.reducer,
  }
})

export let { loadData, EditName, EditWebsite, EditAddress, EditContact, EditWheelchair, EditRate, EditLocation } = data.actions