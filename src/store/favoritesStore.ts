import { create } from "zustand";




type Movie = {
    id: number,
    name: string,
    image: Object
    summary: string
}


type MoviesType = {
    favorites: Movie[],
    addFavorite: (movie: Movie) => void,
    removeFavorite: (movie: Movie) => void,
}


export const favoritesCard = create<MoviesType>((set) => ({
    favorites: [],
    addFavorite: (movie: Movie) => set((s) => ({favorites: [...s.favorites, movie]})),
    removeFavorite: (movie: Movie) => set((s) => ({favorites: s.favorites.filter((m) => {return m.id !== movie.id})}))
}))