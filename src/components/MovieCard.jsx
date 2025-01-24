const backendUrl = import.meta.env.VITE_BACKEND_URL;

function MovieCard({ movie }) {

    return (
        <>
            <div className="card ms-width col-4 my-3" key={movie.id}>
                <img src={`${backendUrl}/images/${movie.image}`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.abstract}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{movie.director}</li>
                        <li className="list-group-item">{movie.genre}</li>
                        <li className="list-group-item">{movie.release_year}</li>
                    </ul>
            </div>
            
        </>
    )
};

export default MovieCard;