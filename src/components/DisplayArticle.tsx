import { Article } from "@/entities";
import Link from "next/link";


interface Props {
    article: Article;
}

export default function DisplayArticle({ article }: Props) {


    return (
        <>
            <div className="col-10 col-md-3 m-5 d-flex flex-column align-items-center">
                <h2 className="text-center">{article.title}</h2>
                <Link href={`/article/${article.id}`}>
                    <img className="mt-3" src={article.image} style={{ width: "100%" }} alt="illustration" />
                </Link>
                <div className="d-flex flex-row justify-content-between" style={{ width: "100%" }}>
                    <p><span className="fw-bold">Auteur : </span>{article.author}</p>
                    {article.publicationDate &&
                        <p><span className="fw-bold">Date : </span>{new Date(article.publicationDate).toLocaleDateString()}</p>}
                    <p><span className="fw-bold">Vues : </span>{article.view}</p>
                </div>
                <br />
            </div>
        </>
    )

}