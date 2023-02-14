

export default function SearchBar() {

    return (
        <>
        <div className="d-flex align-items-center">
            <label htmlFor="search">
                <input type="text" name="search" id="search"/>
            </label>
            <button type="submit" className="ms-2 btn btn-dark">Rechercher</button>
        </div>
        </>
    )

}