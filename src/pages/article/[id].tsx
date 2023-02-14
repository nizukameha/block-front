import {Article} from "@/entities";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DeleteArticle, fetchOneArticle } from "@/service-article";
import DisplayOneArticle from "@/components/DisplayOneArticle";
import Link from "next/link";
import { FormEvent } from "react";


export default function OneArticle() {

    const [article, setArticle] = useState<Article>();
    const router = useRouter();

    /**
     * Le tableau de useEffect contient l'id, comme ça le useEffect va se relancer des qu'il aura l'article
     */
    useEffect(() => {
        if(router.query.id) {
            fetchOneArticle(Number(router.query.id)).then(data => {
                setArticle(data);
              })
        }
    }, [router.query.id])

    function handleDelete(event:FormEvent) {
        event.preventDefault();
        DeleteArticle(router.query.id)

        router.push("/");

    }

    //Pendant que useEffect récupere l'id, un spinner s'affiche
    if(!article) {
        return (
            <>
                <div className="d-flex justify-content-center align-items-center" style={{width:"100vw", height:"100vh"}}>
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
                    <DisplayOneArticle article={article}/>
                </div>
            </div>
            </div>
        </>
    );
}
