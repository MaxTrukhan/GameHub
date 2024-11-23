import { useEffect, useState } from "react"
import apiRequest from "../api-request";
import { CanceledError } from "axios";


interface gameProp {
    id: number ;
    name: string;
  }
  
  interface resultProp {
    count: number;
    results : gameProp[]
  }
  

export const useGame = () => {
    const [ gameList, setGameList] = useState<gameProp[]>([])
    const [error, setError] = useState('')

const [loading, setLoading] = useState(true)
  useEffect(() => {
    const controler = new AbortController
    setLoading(true)
    apiRequest.get<resultProp>('/games', {
        signal: controler.signal
    })
    .then(res => {
      setGameList(res.data.results)
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

  return({gameList, error, loading})
}