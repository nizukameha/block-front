import { Article, Comments } from "@/entities";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DeleteArticle, fetchAllComments, fetchOneArticle, DeleteComments, AddOneComment } from "@/service-article";
import DisplayOneArticle from "@/components/DisplayOneArticle";
import Link from "next/link";
import { FormEvent } from "react";
import dateFormat from "dateformat";

export default function OneArticle() {

    const [article, setArticle] = useState<Article>();
    const [comments, setComments] = useState<Comments[]>([]);
    const [comment, setComment] = useState<Comments>({
        name: "",
        text: "",
        publicationDate: "",
        idArticle: 0
    });
    const router = useRouter();



    /**
     * Le tableau de useEffect contient l'id, comme ça le useEffect va se relancer des qu'il aura l'article
     */
    useEffect(() => {
        if (router.query.id) {
            fetchOneArticle(Number(router.query.id)).then(data => {
                setArticle(data);
            })
            fetchAllComments().then(dataC => {
                setComments(dataC);
                console.log(dataC);
            })
        }
    }, [router.query.id])

    function handleChange(event:any) {
        setComment({
            ...comment,
            [event.target.name]: event.target.value
        });
    }


    function handleDelete(event: FormEvent) {
        event.preventDefault();
        DeleteArticle(router.query.id)

        router.push("/");

    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        comment.idArticle = Number(router.query.id);
        const dateNow = new Date();
        comment.publicationDate = dateFormat(dateNow, "yyyy/mm/dd/")
        const add = await AddOneComment(comment);
        setComments([...comments, add]);
    }

    function removeComment(idComment: number) {
        DeleteComments(idComment);
        setComments(comments.filter(item => item.id != idComment))
    }

    //Pendant que useEffect récupere l'id, un spinner s'affiche
    if (!article) {
        return (
            <>
                <div className="d-flex justify-content-center align-items-center" style={{ width: "100vw", height: "100vh" }}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-flex flex-row justify-content-around align-items-center mt-5 mb-5">
                        <Link href={`/edit-article/${router.query.id}`}>
                            <button type="button" className="btn btn-dark">Éditer cet article</button>
                        </Link>
                        <button type="button" className="btn btn-danger" onClick={handleDelete}>Supprimer cet article</button>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex flex-wrap flex-row justify-content-center">
                        <DisplayOneArticle article={article} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="d-flex flex-wrap flex-column justify-content-center align-items-center">
                    {comments.map(item => item.idArticle == article?.id &&
                        <div className="col-6 mt-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <button style={{float:"right"}} onClick={() => removeComment(item.id!)} type="button" className="btn-close remove" aria-label="Close"></button>
                                    <p className="card-subtitle text-muted">{new Date(item.publicationDate).toLocaleDateString()}</p>
                                    <p className="card-text">{item.text}</p>
                                </div>
                            </div>
                        </div>)}
                        <h3 className="text-center mt-3">Ajouter un commentaire</h3>
                        <form className="mt-3 d-flex flex-column align-items-center" onSubmit={handleSubmit}>
                            
                            <div className="mb-3 mt-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Pseudo</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="name" onChange={handleChange}/>
                                </div>
                                <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Commentaire</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name="text" onChange={handleChange}></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark">Envoyer</button>

                        </form>
                </div>
            </div>
        </>
    );
}
