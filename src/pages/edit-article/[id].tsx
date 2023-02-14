import ArticleForm from "@/components/ArticleForm";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Article } from "@/entities";
import { fetchOneArticle } from "@/service-article";

export default function editArticle() {

    const [article, setArticle] = useState<Article>();
    const router = useRouter();
    useEffect(() => {
        if(router.query.id) {
            fetchOneArticle(Number(router.query.id)).then(data => {
                setArticle(data);
              })
        }
    }, [router.query.id])

    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 d-flex flex-column align-items-center">
                    {/** Il faut vérifier qu'on a bien un article avant de lui en envoyer dans le props, car sinon le formulaire va se charger sans l'article */}
                    {article &&
                    <ArticleForm article={article}/>}
                </div>
            </div>
        </div>
        </>
    )

}