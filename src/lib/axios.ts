import axios from "axios"

export const NewsApi = axios.create({
    baseURL: "https://newsapi.org/v2/",
})

NewsApi.defaults.headers.common['X-Api-Key'] = '13d79dfa7ca44fc092655a79571f1790'