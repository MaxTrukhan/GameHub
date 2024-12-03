import { UseData } from "./useDate";
import { genresList } from "./useGanres";
import { Platform } from "./usePlatform";
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

  
 export const UseGame = (selectedGenre: genresList | null, selectedPlatform: Platform | null) => UseData<gameProp>('/games', {
    params: {
        genres: selectedGenre?.id ,
        parent_platforms: selectedPlatform?.id
    } 
    
}, [selectedGenre?.id , selectedPlatform?.id])



  
  