import { useEffect, useState } from "react";
import { fetchAllArticles } from "@/service-article";
import { Article } from "@/entities";
import DisplayArticle from "@/components/DisplayArticle";
import AddBtn from "@/components/AddBtn";
import SearchBar from "@/components/SearchBar";


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
      <h1 className="text-center mt-5">Les derniers articles</h1>
      <div className="col-12 d-flex flex-row justify-content-around align-items-center mt-5 mb-5">
        <AddBtn/>
        <SearchBar/>
      </div>
    </div>
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