import { Link, useParams } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function MovieCard({ movie }) {


    return (
        <>
            <div className="card ms-width col-4 my-3" key={movie.id}>
                <img src={`${backendUrl}/images/${movie.image}`} className="card-img-top" alt={movie.title} width="300px" height="450px"/>
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.abstract}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{movie.director}</li>
                        <li className="list-group-item">{movie.genre}</li>
                        <li className="list-group-item">{movie.release_year}</li>
                    </ul>
                    <div className="card-body">
                    <Link className="btn btn-primary " aria-current="page" to={`/movies/${movie.id}`} >Dettagli</Link>
                    </div>
            </div>
            
        </>
    )
};

export default MovieCard;