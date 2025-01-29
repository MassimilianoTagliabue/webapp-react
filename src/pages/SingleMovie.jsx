import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Review from "../components/Review";
import ReviewForm from "../components/ReviewForm";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const initialValue = {
    name:"",
    text:"",
    vote:0,
}

function SingleMovie() {
    const { id } = useParams("");
    const [movie, setMovie] = useState({});
    const [review, setReview] = useState([])
    const [formData, setFormData] =useState(initialValue);

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


    const storeReview = (formData) =>{
        console.log("Submit review", id, formData);

        axios.post(`${backendUrl}/movies/${id}/reviews`, formData).then((resp) =>{
            //azzeriamo i campi del form
            setFormData(initialValue)
            //chiediamo i dati aggiornati
            getMovie();
        })
    }
    

    return (
        <>
            <div className="card ms-width col-5 my-5 mx-5" key={movie.id}>
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

            

            <div className="container ">
                {/* inserimento recensione */}
                <div className=" col-8 my-5 p-5">
                    <ReviewForm 
                        formData={formData}
                        setFormData={setFormData}
                        onSubmitFunction={storeReview}
                    />
                </div>

                {/* lista di recensioni */}
                <ul>
                    {review.map((curReview) => {
                        return (
                            <Review key={curReview.id} review={curReview} />
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default SingleMovie;