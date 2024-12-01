import { UseData } from "./useDate"

export interface genresList {
    id: number;
    name: string;
    slug: string
    image_background: string
  }
  
 export const GenresList = () => UseData<genresList>('/genres')

