import { Link } from "react-router";
import Details from "../components/Details/Details";

import "./pages_css/moviesDetails.css"
export default function MovieDetails() {
  return (
    <div className="movie-details">
      <Details />
      <Link to={"/"}><button>back to movies</button></Link>
    </div>
  )
}