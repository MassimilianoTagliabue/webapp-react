import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const backendUrl =import.meta.env.VITE_BACKEND_URL

function MoviesPage () {

    const [movie, setMovie] = useState([])

    useEffect(() =>{
        getMovies();
    },[]);

    //prendo i film
    const getMovies = () =>{
        axios.get(`${backendUrl}/movies`).then((resp) =>{

            console.log(resp.data.data);
            setMovie(resp.data.data)
            
        });
    };

    return(
        <div className="container mt-5 d-flex flex-wrap ">
            {movie.map((curMovie) =>{
                return(
                    <>
                    <MovieCard movie={curMovie}/>
                    </>
                )
            })}
        </div>
    )
};

export default MoviesPage