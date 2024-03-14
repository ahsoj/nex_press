import { formatDate } from "@/lib/formatDate";
import { NewsApiResponseArticles } from "@/types/type";
import Link from "next/link";
import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

export const HeadlineHeader: React.FC<{
  topNews: Partial<NewsApiResponseArticles>;
}> = ({ topNews }) => {
  const date = formatDate(topNews.publishedAt as string);
  return (
    <div className="bottom-0 left-0 z-50 rounded-tr-md bg-[rgb(30_30_30)] p-4 md:absolute md:mb-8 md:ml-8 md:max-w-2xl lg:max-w-3xl">
      <div className="space-y-3">
        <div className="flex items-center gap-x-4 whitespace-nowrap">
          <div className="flex items-center gap-x-2 whitespace-nowrap">
            <BsCalendar2Date className="fill-red-500 font-bold" />
            <span className="text-xs font-semibold uppercase text-brand">
              {date}
            </span>
          </div>
          <div className="flex items-center gap-x-2 whitespace-nowrap">
            <MdCategory className="fill-red-500 font-bold" />
            <span className="text-xs font-semibold text-brand">SPORT</span>
          </div>
        </div>
        <div>
          <Link
            href="/"
            className="h2_text font-extrabold text-brand hover:underline group-hover/headertext:text-secondary"
          >
            {topNews.title}
          </Link>
          <p className="text-gray-300">{topNews.content}</p>
        </div>
      </div>
    </div>
  );
};
