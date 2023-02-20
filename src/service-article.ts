import axios from "axios";
import { Article, Comments } from "./entities";

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

export async function fetchTitle(title:string) {

    const response = await axios.get(`http://localhost:8000/api/article/find/${title}`);
    return response.data;
}

export async function fetchAllComments() {

    const response = await axios.get<Comments[]>(`http://localhost:8000/api/comment`);
    return response.data;
}

export async function DeleteComments(id:any) {

    const response = await axios.delete(`http://localhost:8000/api/comment/${id}`);
    return response.data;
}

export async function AddOneComment(comment:Comments) {

    const response = await axios.post<Comments>(`http://localhost:8000/api/comment`, comment);
    return response.data;
}