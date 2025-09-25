import { Link } from "react-router";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/articlesData.json");
      const data = await res.json();
      setArticles(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="py-4 mb-5">ARTICLES: </div>
      <ul className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-3">
        {articles.map((article) => (
          <Link to={`/articles/${article.slug}`} key={article.id}>
            <article className="bg-gray-200  border p-5 overflow-auto h-1/1 rounded-md border-[#979494]">
              <div>
                <img
                  src={`/${article.img}`}
                  alt="Produktbild"
                  className="h-[150px] w-[100%] object-cover border border-[#979494]"
                ></img>
                <h2 className="text-2xl font-black min-h-[80px]">
                  {article.name}
                </h2>
              </div>
              <div className="mb-2">
                <p>{article.desc}</p>
              </div>
            </article>
          </Link>
        ))}
      </ul>
    </>
  );
}
