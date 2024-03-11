import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

const NewsApi = axios.create({
    baseURL: "https://newsapi.org/v2/",
})

NewsApi.defaults.headers.common['X-Api-Key'] = '13d79dfa7ca44fc092655a79571f1790'

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const response = await NewsApi.get('/top-headlines', {
            params: {
                country: 'us'
            }
        })
        const data = await response.data
        return Response.json({data, status: response.statusText});
    } catch (error) {
       return new Response('Server Error', { status: 500 })
    }
}