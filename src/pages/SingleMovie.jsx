import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Review from "../components/Review";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function SingleMovie() {
    const { id } = useParams("");
    const [movie, setMovie] = useState({});
    const [review, setReview] = useState([])

    useEffect(() => {
        getMovie();
    }, [id])

    const getMovie = () => {
        axios.get(`${backendUrl}/movies/${id}`).then((resp) => {
            console.log(resp.data.data);
            setMovie(resp.data.data);
            setReview(resp.data.data.reviews);
        })
    }

    return (
        <>
            <div className="card ms-width col-6 my-5 mx-5" key={movie.id}>
                <img src={`${backendUrl}/images/${movie.image}`} className="card-img-top" alt={movie.title} />
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

            <div className="container">
                <ul>
                    {review.map((curReview) =>{
                        return(
                        <Review key={curReview.id} review={curReview}/>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default SingleMovie;