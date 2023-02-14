import { useState } from "react";
import { Article } from "@/entities";
import { AddOneArticle } from "@/service-article";
import { FormEvent } from "react";
import dateFormat from "dateformat";
import { useRouter } from "next/router";


export default function ArticleForm() {

    const router = useRouter();
    const dateNow = new Date()
    // J'utilise ça pour formater la date au meme format que celui de la base de donnée
    const pDate = dateFormat(dateNow, "yyyy/mm/dd/")
    const [article, setArticle] = useState<Article>({
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
        const added = await AddOneArticle(article)

        router.push('/article/'+added.id);

    }


    return (
        <>
        <h1 className="text-center mt-3 mb-5">Ajouter un article</h1>
            <form className="col-6" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formPseudo" className="form-label">Pseudo</label>
                    <input type="text" name="author" className="form-control" id="formPseudo" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formTitle" className="form-label">Titre de l'article</label>
                    <input type="text" name="title" className="form-control" id="formTitle" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formImg" className="form-label">Lien vers une image</label>
                    <input type="text" name="image" className="form-control" id="formImg" onChange={handleChange}/>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" name="text" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px"}} onChange={handleChange}></textarea>
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