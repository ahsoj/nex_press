import { NewsApi } from "@/lib/axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const { searchParams } = new URL(req.url)
        const query = searchParams.get('query')
        
        const response = await NewsApi.get(`/everything?q=${query}`)
        const data = await response.data

        return Response.json({data, status: response.statusText});
    } catch (error) {
       return new Response('Server Error', { status: 500 })
    }
}