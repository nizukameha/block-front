import { useEffect, useState } from "react";
import { fetchAllArticles } from "@/service-article";
import { Article } from "@/entities";
import DisplayArticle from "@/components/DisplayArticle";
import { useRouter } from "next/router";


export default function Index() {

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchAllArticles().then(data => {
      setArticles(data);
    })
  }, [])


  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex flex-wrap flex-row justify-content-center">
          {articles.map((item) =>
            <DisplayArticle key={item.id} article={item}/>
            )}
        </div>
      </div>
    </div>
    </>
  )

}