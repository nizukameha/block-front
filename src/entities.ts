export interface Article {
    id?:number;
    title:string;
    text:string;
    author:string;
    view:number;
    publicationDate:string;
    image:string;
}

export interface Comments {
    id?:number;
    name:string;
    text:string;
    publicationDate:string;
    idArticle:number;
}