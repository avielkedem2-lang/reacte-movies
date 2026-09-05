import { useEffect } from "react";
import { moviesCard } from "../store/movieStore";



export function useFetch(url:string){
    const data = moviesCard((s) => s.movies)
    const setData = moviesCard((s) => s.setMovies)


    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
        // .catch(error => setError(error))
    }, [url])
    
    return{
        data,
        setData
    }
}