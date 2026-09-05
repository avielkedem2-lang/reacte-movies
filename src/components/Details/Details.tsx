import { useParams } from "react-router";
import { moviesCard } from "../../store/movieStore"
import "./Details.css"
import { favoritesCard } from "../../store/favoritesStore";
import { useEffect, useMemo, useState } from "react";

export default function Details() {
    const favorites = favoritesCard(s => s.favorites)
    const addFavorite = favoritesCard(s => s.addFavorite)
    const removeFavorite = favoritesCard(s => s.removeFavorite)
    const data = moviesCard(s => s.movies);
    const { id } = useParams()
    const movie = data.find((m) => { return m.id === parseInt(id!) })
    const isMovieInFavorites = useMemo(() => favorites.some((m) => { return m.id === parseInt(id!) }), [favorites])

    
    const buttonFavoriteText = isMovieInFavorites ? 'remove' : 'add to favorite';
    const addToFavorite = () => {
        if (isMovieInFavorites){
            removeFavorite(movie!)
        }else {
            addFavorite(movie!)
        }
    }
    return (
        <div className="card-details">
            <img className="img" src={movie?.image.medium} />
            <section className="details">
                <h3>{movie?.name}</h3>
                <p>{movie?.summary}</p>
                <button onClick={addToFavorite}>{buttonFavoriteText}</button>
            </section>
        </div>
    )
}  
