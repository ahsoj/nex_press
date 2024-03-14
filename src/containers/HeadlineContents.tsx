import { NewsApiResponseArticles } from "@/types/type";
import Link from "next/link";
import React from "react";
import { FaPencilAlt } from "react-icons/fa";

const HeadlineContentListCard: React.FC<{
  article: Partial<NewsApiResponseArticles>;
}> = ({ article, ...props }) => {
  return (
    <div
      {...props}
      className="group/headlinelist mt-2 flex max-w-96 flex-col overflow-hidden rounded-lg border border-gray-500/25"
    >
      <div className="min-h-48 w-full min-w-96 flex-shrink-0 md:max-w-96">
        <img
          className="w-full object-cover"
          src={article.urlToImage || "/broken_image.png"}
          alt={article.title}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-[rgb(30_30_30)] p-6">
        <div className="flex-1 space-y-2">
          <p className="flex items-center gap-x-3 whitespace-nowrap text-sm font-medium text-indigo-600">
            <FaPencilAlt className="fill-red-500" />
            <a
              href={article.url}
              target="_blank"
              className="text-indigo-500"
              rel="noreferrer"
            >
              {article.author || "Unknown"}
            </a>
          </p>
          <h3 className="mt-2 text-xl font-semibold text-gray-300 hover:underline group-hover/headlinelist:text-secondary">
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.title}
            </a>
          </h3>
          <p className="text-sm text-gray-400">
            {article.content || article.description}
          </p>
        </div>
        <div className="mt-6 flex items-center">
          <Link
            href={article.url as string}
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Continue reading
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeadlineContentListCard;
