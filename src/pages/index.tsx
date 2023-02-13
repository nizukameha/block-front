import { useEffect, useState } from "react";
import { fetchAllArticles } from "@/service-article";
import { Article } from "@/entities";
import DisplayArticle from "@/components/DisplayArticle";


export default function Index() {

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchAllArticles().then(data => {
      setArticles(data);
    })
  }, [])


  return (
    <>
      {articles.map((item) =>
        <DisplayArticle key={item.id} article={item}/>
      )}
    </>
  )

}