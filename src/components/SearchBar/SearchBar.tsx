import { useEffect, useMemo, useRef, useState } from "react"
import "./searchBar.css"
import { moviesCard } from "../../store/movieStore"
import ListMovies from "../ListMovies/ListMovies"


type Movie = {
    id: number,
    name: string,
    image: Object
    summary: string
}


interface ListMoviesProps {
    data: Movie[] | null
}



export default function SearchBar() {
  const data = moviesCard(s => s.movies)
  const [name, setName] = useState<string>("")
  const moviesFound = useMemo<Movie[]>(() => data.filter((m) => { return m.name.toLowerCase().startsWith(name.toLowerCase()) }), [name])
  const input = useRef<HTMLInputElement>(null)
  useEffect(() => {
    input.current?.focus()
  }, [])

  return (
    <div className="title-movies">
      <h1>Discover Movies</h1>
      <input ref={input} className="search" type="text" placeholder="Search" onChange={(e) => setName(e.target.value)} />
      <ListMovies data={moviesFound}/>
    </div>
  )
}
