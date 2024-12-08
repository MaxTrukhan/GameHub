import GenreData from "../data/GenreData";

export interface genresList {
    id: number;
    name: string;
    slug: string
    image_background: string
  }
  
 export const GenresList = () => ({data: GenreData, loading: false, error: null});


