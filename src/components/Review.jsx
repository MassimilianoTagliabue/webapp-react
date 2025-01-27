
function Review({ review }) {

    const getStars = (vote) => {
        let star = ""
        for (let i = 0; i<vote; i++) {
         star +=`<i className="fa-solid fa-star" ></i>`;
        }
        return star
    }

    return (
        <>
            <div className="card mt-3" >
                <div className="card-body">
                    <h5 className="card-title">Pubblicato da: {review.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">voto: {review.vote}</h6>
                    <p className="card-text">{review.text}</p>

                </div>
            </div>

        </>
    )
}

export default Review;