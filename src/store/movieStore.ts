import { create } from "zustand"


type Movie = {
    id: number,
    name: string,
    image: Object
    summary: string
}



type MoviesType = {
    movies : Movie[],
    setMovies: (data: Movie[]) => void
}

export const moviesCard = create<MoviesType>((set) => ({
    movies: [],
    setMovies: (data: Movie[]) => set(() => ({movies : data}))
}))