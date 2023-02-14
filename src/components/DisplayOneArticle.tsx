import { Article } from "@/entities";


interface Props {
    article: Article;
}

export default function DisplayOneArticle({ article }: Props) {


    return (
        <>
            <div className="col-6 m-5 d-flex flex-column align-items-center">
                <h1 className="text-center">{article.title}</h1>
                <img className="mt-3" src={article.image} style={{ width: "100%" }} alt="illustration" />
                <div className="d-flex flex-row justify-content-between" style={{ width: "100%" }}>
                    <p><span className="fw-bold">Auteur : </span>{article.author}</p>
                    {article.publicationDate &&
                        <p><span className="fw-bold">Date : </span>{new Date(article.publicationDate).toLocaleDateString()}</p>}
                    <p><span className="fw-bold">Vues : </span>{article.view}</p>
                </div>
                <p className="text-justify mt-5 mb-5">{article.text}</p>
                <br />
            </div>
        </>
    )

}