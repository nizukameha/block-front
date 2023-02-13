
import {Article} from "@/entities";

interface Props {
    article:Article;
}

export default function DisplayArticle({article}:Props) {

    return (
        <>
            <h1>Titre : {article.title}</h1>
            <p>{article.text}</p>
            {article.publication_date &&
            <p>{new Date(article.publication_date).toLocaleDateString()}</p>}
            <p>Autheur : {article.author}</p>
            <p>Vues : {article.view}</p>
            <img src={article.image} alt="illustration"/>
            <br/>
        </>
    )

}