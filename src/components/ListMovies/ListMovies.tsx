import { moviesCard } from "../../store/movieStore"
import MovieCard from "../MovieCard/MovieCard"
import "./ListMovie.css"
type Movie = {
    id: number,
    name: string,
    image: Object
    summary: string
}


interface ListMoviesProps {
    data: Movie[] | null
}

export default function ListMovies({data}: ListMoviesProps) {
    return (
        <div className="movieList">
            {data?.map((movie) => (
               <MovieCard key={movie.id} {...movie}/> 
            ))}
        </div>
    )
}
