import ListMovies from "../components/ListMovies/ListMovies";
import SearchBar from "../components/SearchBar/SearchBar";
import { moviesCard } from "../store/movieStore";
import "./pages_css/Movies.css"


export default function Movies() {
  const data = moviesCard(s => s.movies)
  // console.log(data);
  
  return (
    <div className="movies">
      <SearchBar />
      <ListMovies data={data}/>
    </div>
  )
}
