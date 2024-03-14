import { NewsApiResponseArticles } from "@/types/type";
import React from "react";

type ResultCardProps = Pick<
  NewsApiResponseArticles,
  "url" | "urlToImage" | "title" | "author" | "description"
>;

const ResultCard: React.FC<{
  article: ResultCardProps & React.HTMLAttributes<HTMLElement>;
}> = ({ article }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg md:flex-row">
      <div className="w-full min-w-96 flex-shrink-0 md:max-w-96">
        <img
          className="w-full object-cover"
          src={article.urlToImage || "/broken_image.png"}
          alt={article.title}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-gray-900 p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.author}
            </a>
          </p>
          <h3 className="mt-2 text-xl font-medium text-gray-400">
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.title}
            </a>
          </h3>
          <p className="text-sm text-gray-500">{article.description}</p>
        </div>
        <div className="mt-6 flex items-center">
          <button className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Continue reading
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
