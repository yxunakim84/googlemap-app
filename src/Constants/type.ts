export interface reviewType {
  author_name: string,
  profile_photo_url: string,
  rating: number,
  text: string,
  relative_time_description: string,
}
export interface dataType {
  name: string,
  reviews: reviewType[],
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
  types: string[],
  wheelchair_accessible_entrance: boolean,
  
}
export interface photosType {
  photo_reference: string,
}


export interface placeInforms {
  name: string,
  reviews?: string[],
  photos?: photosType[],
  formatted_address: string,
  formatted_phone_number: string,
  website?: string,
  rating?: number,
  geometry: {
    location: {
      lat: number,
      lng: number,
    }
  },
  types: string[],
  wheelchair_accessible_entrance?: boolean,
  
}

export interface photosType {
  photo_reference: string,
}