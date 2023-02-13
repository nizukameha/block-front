import axios from "axios";
import { Article } from "./entities";

//On met dans ce fichier toutes les requetes du CRUD

export async function fetchAllArticles() {

    const response = await axios.get<Article[]>(`http://localhost:8000/api/article`);
    return response.data;
}

export async function fetchOneArticle(id:any) {

    const response = await axios.get<Article>(`http://localhost:8000/api/article/${id}`);
    return response.data;
}