import { Link } from "react-router"
import "./movieCard.css"

type Movie = {
    id: number,
    name: string,
    image: Object
    summary: string
}


export default function MovieCard(props: Movie) {

    return (
        <div className="card">
            <img className="img" src={props.image?.medium}/>
            <p>{props.name}</p>
            <Link to={`moviesDetails/${props.id}`}>
                <button className="view">view</button>
            </Link>
        </div>
    )
}
