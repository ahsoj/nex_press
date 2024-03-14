import { NewsApiResponseArticles } from "@/types/type";
import React from "react";
import HeadlineContentListCard from "./HeadlineContents";
import { HeadlineHeader } from "./HeadlineHeader";
import TOPNewsTitles from "./TOPNewsTitles";

type HeadlineProps = {
  articles: Partial<NewsApiResponseArticles>[];
};

const TicketElement = () => {
  return <div className="triangle_shape w-24 bg-red-500"></div>;
};

const Headline: React.FC<HeadlineProps> = ({ articles, ...props }) => {
  const todayNews = articles[0];
  return (
    <article
      className="angled_shape  relative min-h-[40rem] w-full rounded-lg border border-gray-800 bg-[rgb(24_24_24)] after:absolute after:right-0 after:top-0 after:h-20 after:w-20 after:-translate-y-0.5 after:translate-x-0.5 after:rounded-bl-xl after:bg-brand after:p-4 after:pt-1 after:shadow-md"
      {...props}
    >
      <TOPNewsTitles />
      <div className="p-10"></div>
      <div className="group/headertext relative w-full max-w-[80rem] p-4 md:p-8">
        <img
          src={todayNews.urlToImage || "/broken_image.png"}
          alt={todayNews.title}
          className="max-h-[35rem] w-full object-cover transition"
        />
        <HeadlineHeader topNews={todayNews} />
      </div>
      <div className="mx-auto flex flex-wrap justify-center gap-4 py-4">
        {articles.slice(1).map((article, idx) => (
          <HeadlineContentListCard article={article} key={idx} />
        ))}
      </div>
    </article>
  );
};

export default Headline;
