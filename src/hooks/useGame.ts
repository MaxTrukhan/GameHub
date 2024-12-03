import { UseData } from "./useDate";
import { gameQuery } from "../App";
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

  
 export const UseGame = (gameQuery: gameQuery) => UseData<gameProp>('/games', {
    params: {
        genres: gameQuery.genresList?.id ,
        parent_platforms: gameQuery.Platform?.id
    } 
    
}, [gameQuery])



  
  