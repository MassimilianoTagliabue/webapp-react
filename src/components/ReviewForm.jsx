
function ReviewForm({ formData, setFormData, onSubmitFunction }) {

    const availableVotes = Array.from(Array(6).keys());

    const setFieldValue = (event) => {

        const value = event.target.value;       //prendo il valore del campo
        const fieldName = event.target.name;    //prendo il nome del campo
        const newFormData = { ...formData };      //assegno a new forma data l'oggetto con i campi vuoti
        newFormData[fieldName] = value;         //modifico i campi mettendo come chiave fieldName e come valore value
        setFormData(newFormData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmitFunction(formData)

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>aggiungi una recensione</h2>
            <div className="mb-3 mt-3">
                <label htmlFor="username" className="form-label">Nome Utente</label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="name"
                    value={formData.name}
                    onChange={setFieldValue}
                />
            </div>

            <div className="mb-3 mt-3">
                <label htmlFor="vote" className="form-label">voto</label>
                <select
                    className="form-select"
                    id="vote"
                    name="vote"
                    onChange={setFieldValue}
                    value={formData.vote}
                >
                    {availableVotes.map((curVote) => {
                        return (
                            <option key={curVote} value={curVote}>{curVote}</option>
                        )
                    })}
                </select>
            </div>

            <div className="mb-3 mt-3">
                <label htmlFor="comment" className="form-label">Commento</label>
                <textarea
                    className="form-control"
                    id="comment"
                    name="text"
                    value={formData.text}
                    onChange={setFieldValue}
                >
                </textarea>
            </div>

            <button type="submit" className="btn btn-primary">Invia</button>
        </form>
    )
}

export default ReviewForm;
