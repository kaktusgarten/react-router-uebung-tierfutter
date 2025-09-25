// Daten:
import { articlesData } from "../../data/articlesData";
import { useNavigate } from "react-router";

import { useParams } from "react-router";
export default function ArticleDetails() {
  const { slug } = useParams();
  const article = articlesData.find((article) => article.slug === slug);
  
  const navigate = useNavigate();
  const kaufen = () => {
    alert("Herzlichen Glückwunsch");
    navigate(-1);
  };
  return (
    <article className="border flex p-5 gap-4">
      <div>
        <img className="max-w-[100%] w-[300px]" src={`/${article.img}`}></img>
      </div>
      <div>
        <h2 className="text-4xl mb-5">{article.name}</h2>
        <p className="text-xl pb-5">{article.desc}</p>
        <button
          onClick={kaufen}
          className="border bg-black text-white px-4 py-2"
        >
          Kaufen
        </button>
      </div>
    </article>
  );
}
