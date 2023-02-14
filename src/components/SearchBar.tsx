import { FormEvent } from "react";
import { fetchTitle } from "@/service-article";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchBar() {

    const [articleTitle, setArticleTitle] = useState({
        title: "",
    });

    const router = useRouter();

    function handleChange(event:any) {
        setArticleTitle({
            ...articleTitle,
            [event.target.name]: event.target.value
        });
    }

    async function handleSubmit(event:FormEvent) {
        event.preventDefault();

        const finded = await fetchTitle(articleTitle.title)
        .catch(error => {
            console.log(error);
            if(error.response.status == 404) {
                router.push('/404');
            }
        })
        router.push(`/article/${finded.id}`);

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="d-flex align-items-center">
                <label htmlFor="search">
                    <input type="text" name="title" id="search" onChange={handleChange}/>
                </label>
                <button type="submit" className="ms-2 btn btn-dark">Rechercher</button>
            </div>
        </form>
        </>
    )

}