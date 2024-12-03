import { UseData } from "./useDate";

export interface Platform {
 id: number;
 name: string;
 slug: string;
}

export const usePlatform = () => UseData<Platform>('/platforms/lists/parents')