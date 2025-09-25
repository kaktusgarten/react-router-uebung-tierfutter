// Daten:
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// SLUG - useParams:
import { useParams } from "react-router";
export default function ArticleDetails() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/articlesData.json");
      const data = await res.json();
      setArticles(data);
    };
    getData();
  }, []);

  // SLUG:
  const { slug } = useParams();
  const article = articles.find((article) => article.slug === slug);

  // KAUFEN BUTTON:
  const navigate = useNavigate();
  const kaufen = () => {
    alert("Herzlichen Glückwunsch");
    navigate(-1);
  };

  if (!article) {
    return <p>Lade Artikel...</p>;
  }

  return (
    <article className="border flex p-5 gap-4 bg-gray-200 rounded-md border-[#979494]">
      <div>
        <img className="max-w-[100%] w-[300px]" src={`/${article.img}`}></img>
      </div>
      <div>
        <h2 className="text-4xl mb-5">{article.name}</h2>
        <p className="text-xl pb-5">{article.desc}</p>
        <button
          onClick={kaufen}
          className="border bg-black text-white px-4 py-2 mr-4"
        >
          Kaufen
        </button>
        <button
          onClick={() => {
            navigate("/articles/overview");
          }}
          className="border  text-black px-4 py-2"
        >
          Zurück
        </button>
      </div>
    </article>
  );
}
