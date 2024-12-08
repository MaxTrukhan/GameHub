import PlatformData from "../data/PlatformData";


export interface Platform {
 id: number;
 name: string;
 slug: string;
}

export const usePlatform = () => ({data: PlatformData, error: null})