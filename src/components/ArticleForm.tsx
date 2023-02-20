import { useState } from "react";
import { Article } from "@/entities";
import { AddOneArticle } from "@/service-article";
import { FormEvent } from "react";
import dateFormat from "dateformat";
import { useRouter } from "next/router";
import { updateArticle } from "@/service-article";


interface Props {
    article?: Article;
}

/*Utiliser un Props. Si on en a un alors article sera remplis avec les propriété de props ect..
* Ici le props est destructuré, c'est a dire que les props qui arrivent dans cette fonction seront typé comme un article.
* Et on va les appeller articleProps
*/
export default function ArticleForm({article:articleProps}:Props) {

    const router = useRouter();
    const dateNow = new Date();
    // J'utilise ça pour formater la date au meme format que celui de la base de donnée
    const pDate = dateFormat(dateNow, "yyyy/mm/dd/")
    //Si on a un un articleProps cela signifit qu'on veut modifier un article donc le formulaire et la requete seront différents
    const [article, setArticle] = useState<Article>(articleProps ? articleProps:{
        author: "",
        title: "",
        publicationDate: pDate,
        image: "",
        text: "",
        view : 0
    });


    function handleChange(event:any) {
        setArticle({
            ...article,
            [event.target.name]: event.target.value
        });
    }


    async function handleSubmit(event:FormEvent) {
        event.preventDefault();

        if (articleProps) {
            const updated = await updateArticle(article)
            router.push('/article/'+updated.id);
        } else {
            const added = await AddOneArticle(article)
            router.push('/article/'+added.id);
        }

    }


    return (
        <>
        <h1 className="text-center mt-3 mb-5">{articleProps ? "Éditer" : "Ajouter"} un article</h1>
            <form className="col-6" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formAuteur" className="form-label">Auteur</label>
                    <input type="text" name="author" className="form-control" id="formAuteur" onChange={handleChange} value={article.author}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formTitle" className="form-label">Titre de l'article</label>
                    <input type="text" name="title" className="form-control" id="formTitle" onChange={handleChange} value={article.title}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formImg" className="form-label">Lien vers une image</label>
                    <input type="text" name="image" className="form-control" id="formImg" onChange={handleChange} value={article.image}/>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" name="text" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px"}} onChange={handleChange} value={article.text}></textarea>
                    <label htmlFor="floatingTextarea2">Article</label>
                </div>
                <label htmlFor="category" className="mb-3">Catégorie</label>
                <div className="form-check" id="category">
                    <input className="form-check-input" type="checkbox" value="actualité" id="actualité" />
                    <label className="form-check-label" htmlFor="actualité">
                    actualité
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="jeux-vidéos" id="jeux-vidéos"/>
                    <label className="form-check-label" htmlFor="jeux-vidéos">
                    jeux-vidéos
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="jeux-vidéos" id="compétition"/>
                    <label className="form-check-label" htmlFor="compétition">
                    compétition
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="jeux-vidéos" id="astuce"/>
                    <label className="form-check-label" htmlFor="astuce">
                    astuce
                    </label>
                </div>
                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="jeux-vidéos" id="évenement"/>
                    <label className="form-check-label" htmlFor="évenement">
                    évenement
                    </label>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-dark">Envoyer</button>
                </div>
            </form>
        </>
    )

}