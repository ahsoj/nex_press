export type NewsApiResponseArticles = {
    source: {
      id: string
      name: string
    }
    author?: string,
    title: string,
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
  };
  
  export type NewsApiResponse = {
      status: string
      totalResults: number
      articles: NewsApiResponseArticles 
}

  
export type ApiError = {
    status: string
    code: string
    message: string
}

