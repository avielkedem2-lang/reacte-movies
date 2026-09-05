
import { Link } from "react-router"
import "./header.css"
export default function Header() {
  return (
    <div className="header">
      <Link to={"/"}>
      <button className="but-links">Movies</button>
      </Link>

      <Link to={"favorite"}>
      <button className="but-links">favorite</button>
      </Link>

      {/* <Link to={"moviesDetails/:id"}>
      <button></button>
      </Link> */}
    </div>
  )
}


