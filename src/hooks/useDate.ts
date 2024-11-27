import { useEffect, useState } from "react"
import apiRequest from "../service/api-request";
import { CanceledError } from "axios";



export interface PlatformIcon {
    id: number;
    name: string;
    slug: string
}

export interface gameProp {
    id: number ;
    name: string;
    background_image: string;
    rating: number;
    metacritic: number;
    parent_platforms: {platform: PlatformIcon}[];
}


export interface genresList {
  id: number;
  name: string
}



  
  interface resultProp <T>{
    count: number;
    results : T[]
  }
  

export const UseData = <T>(endPoint: string) => {
    const [ data, setData] = useState<T[]>([])
    console.log(data)
    const [error, setError] = useState('')

const [loading, setLoading] = useState(true)
  useEffect(() => {
    const controler = new AbortController
    setLoading(true)
    apiRequest.get<resultProp<T>>(endPoint, {
        signal: controler.signal
    })
    .then(res => {
      setData(res.data.results)
      setLoading(false)
    })
    .catch(err => {
      if(err instanceof CanceledError) {
        setError(err.message)
        setLoading(false)
      } else 
      return () => controler.abort()

    

    })
  }, [])

  return({data, error, loading})
}