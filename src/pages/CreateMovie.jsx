import axios from"axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateMovie() {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const defaultForm = {
        title: "",
        director: "",
        genre: "",
        release_year: "",
        abstract: "",
        image: "",
    }

    const [movieData, setMovieData] = useState(defaultForm);

    const navigate = useNavigate();

    const handleInputChange = (event) => {

        const inputName = event.target.name;
        console.log(event.target.value);
        

        if (inputName === "image") {
            const imageFile = event.target.files[0];
            // La gestione separata per il tipo file
            const newFormData = { ...movieData };
            newFormData["image"] = imageFile;
            setMovieData(newFormData);
        }
        else{
            const newFormData = {...movieData};
            newFormData[inputName]= event.target.value;
            setMovieData(newFormData);
        }
    };


    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Non possiamo inviare il file tramite JSON, quindi creiamo l'oggetto FormData
        const dataToSend = new FormData();

        for(let key in movieData){
            dataToSend.append(key,movieData[key]);
        }

        console.log(dataToSend, movieData);
        
        axios.post(`${backendUrl}/movies`, dataToSend, {
            headers:{
                "Content-Type": "multipart/form-data", // Serve per dire al server che i dati contengono anche i file
            }
        }).then((resp) =>{
             // Quando arriva il messaggio di conferma facciamo redirect alla pagina di libri
        navigate("/movies");
        });

    }

    return (
        <>
            <form className="container" onSubmit={handleFormSubmit}>
                <h2 className="my-5">aggiungi una recensione</h2>
                <div className="mb-3 mt-3">
                    <label htmlFor="title" className="form-label">Titolo del film</label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        onChange={handleInputChange}
                        value={movieData.title}

                    />
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="director" className="form-label">Regista del Film</label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        id="director"
                        name="director"
                        onChange={handleInputChange}
                        value={movieData.director}
                    />
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="genre" className="form-label">Genere</label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        id="genre"
                        name="genre"
                        onChange={handleInputChange}
                        value={movieData.genre}
                    />
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="release" className="form-label">Anno di Uscita</label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        id="release"
                        name="release_year"
                        onChange={handleInputChange}
                        value={movieData.release_year}
                    />
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="abstract" className="form-label">Trama del Film</label>
                    <textarea
                        className="form-control"
                        id="abstract"
                        name="abstract"
                        onChange={handleInputChange}
                        value={movieData.abstract}
                    >
                    </textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="image">copertina del del film:</label>
                    {/* Non mettiamo attributo value per il tipo di input file */}
                    <input
                        type="file"
                        className="form-control"
                        name="image"
                        id="image"
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Invia</button>
            </form>
        </>
    )
}

export default CreateMovie;