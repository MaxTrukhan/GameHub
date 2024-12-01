import { useEffect, useState } from "react"
import apiRequest from "../service/api-request";
import { AxiosRequestConfig, CanceledError } from "axios";





  
interface resultProp <T>{
    count: number;
    results : T[]
  }
  

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UseData = <T>(endPoint: string, requestConfig?: AxiosRequestConfig, deps?: any[] ) => {
    const [ data, setData] = useState<T[]>([])
    const [error, setError] = useState('')

const [loading, setLoading] = useState(true)
  useEffect(() => {
    const controler = new AbortController
    setLoading(true)
    apiRequest.get<resultProp<T>>(endPoint, {
        signal: controler.signal,
        ...requestConfig
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
  }, deps ? [...deps] : [])

  return({data, error, loading})
}