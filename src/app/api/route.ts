import { NewsApi } from "@/lib/axios";
import { NextRequest, NextResponse } from "next/server";

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