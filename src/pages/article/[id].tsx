import {Article} from "@/entities";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchOneArticle } from "@/service-article";
import DisplayOneArticle from "@/components/DisplayOneArticle";


export default function OneArticle() {

    const [article, setArticle] = useState<Article>();
    const router = useRouter();

    /**
     * Le tableau de useEffect contient l'id, comme ça le useEffect va se relancer des qu'il aura l'article
     */
    useEffect(() => {
        if(router.query.id){
            fetchOneArticle(Number(router.query.id)).then(data => {
                setArticle(data);
              })
        }
      }, [router.query.id])

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
                <div className="d-flex flex-wrap flex-row justify-content-center">
                    <DisplayOneArticle article={article}/>
                </div>
            </div>
            </div>
        </>
    );
}
