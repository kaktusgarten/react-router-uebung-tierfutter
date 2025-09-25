import { Link } from "react-router";
import { articlesData } from "../../data/articlesData";
export default function Articles() {
  return (
    <>
      <div className="py-4 mb-5">ARTICLES: </div>
      <ul className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-3">
        {articlesData.map((article) => (
          <Link to={`/articles/${article.slug}`} key={article.id}>
            <article className="border p-5 overflow-auto h-1/1">
              <div>
                <img
                  src={`/${article.img}`}
                  alt="Produktbild"
                  className="h-[150px] w-[100%] object-cover"
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
