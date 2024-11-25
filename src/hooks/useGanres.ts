import { useEffect, useState } from "react"
import apiRequest from "../service/api-request"
import { CanceledError } from "axios";

interface ganresProp {
    id: number;
    name: string
}
interface resultGanresProp {
    count: number;
    results: ganresProp[];
}

const useGanres = () => {
    const [genresList ,setGenresList] = useState<ganresProp[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        const controler = new AbortController
        apiRequest.get<resultGanresProp>('/genres', {
            signal: controler.signal
        })
        .then(res => {
            setGenresList(res.data.results)
        })
        .catch(err => {
            if(err instanceof CanceledError) {
                setError(err.message)
            }
            return() => controler.abort()
        })
       
    }, [])
    return({genresList, error})
}

export default useGanres