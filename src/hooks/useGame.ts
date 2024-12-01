import { UseData } from "./useDate";
import { genresList } from "./useGanres";
export interface PlatformIcon {
    id: number;
    name: string;
    slug: string
}
export interface Genres {
    name: string
    slug: string
}
export interface gameProp {
    id: number ;
    name: string;
    background_image: string;
    rating: number;
    metacritic: number;
    parent_platforms: {platform: PlatformIcon}[];
    genres: Genres

}

  
 export const UseGame = (selectedGenre: genresList | null) => UseData<gameProp>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id])



  
  