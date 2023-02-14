import Link from "next/link"

export default function AddBtn() {

    return (
        <>
        <Link href={`/add-article`}>
            <button type="button" className="btn btn-dark">Ajouter un article</button>
        </Link>
        </>
    )
    
}