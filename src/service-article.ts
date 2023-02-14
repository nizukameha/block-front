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

export async function AddOneArticle(article:Article) {

    const response = await axios.post<Article>(`http://localhost:8000/api/article`, article);
    return response.data;
}

export async function DeleteArticle(id:any) {

    const response = await axios.delete(`http://localhost:8000/api/article/${id}`);
    return response.data;
}

export async function updateArticle(article:Article) {

    const response = await axios.put(`http://localhost:8000/api/article/${article.id}`, article);
    return response.data;
}