import { favoritesCard } from "../../store/favoritesStore"
import MovieCard from "../MovieCard/MovieCard"

export default function FavoritesMovies() {
    const favorites = favoritesCard(s => s.favorites)
    return (
        <div className="movieList">
            {favorites.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
            ))}
        </div>
    )
}
