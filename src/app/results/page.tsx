import ResultCard from "@/components/newsCard";
import { NewsApiResponse } from "@/types/type";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

async function getHeadlines(query: string) {
  const res = await fetch(`http:localhost:3000/api/everything?query=${query}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const EmptyResult = () => {
  return (
    <div className="mx-auto max-w-md">
      <span className="text-xl">
        We couldn&#39;t find a match for{" "}
        <strong className="text-2xl">&#34;hot news&#34;</strong>. Please try
        another search, or go
        <Link href="/" className="pl-2 text-secondary hover:underline">
          back To home page
        </Link>
      </span>
    </div>
  );
};

const NewsResults = async () => {
  const fullPath = headers().get("x-url");
  const params = new URL(fullPath as string).searchParams;
  const { data: responseData } = await getHeadlines(
    params.get("query") as string,
  );

  return (
    <div>
      {responseData ? (
        <div className="space-y-8 px-4">
          {responseData.articles.map(
            (article: NewsApiResponse["articles"], idx: number | null) => (
              <ResultCard key={idx} article={article} />
            ),
          )}
        </div>
      ) : (
        <EmptyResult />
      )}
    </div>
  );
};

export default NewsResults;
