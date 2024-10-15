import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
export const dynamic = 'force-dynamic'


export async function POST(request:any) {
    const ticket = await request.json()
    debugger;
    //get supa base instance
    const supabase = createRouteHandlerClient({cookies})

    //get the current user session
    const {data:{session}} = await supabase.auth.getSession()

    const {data, error} = await supabase.from('Tickets')
                             .insert({
                                ...ticket,
                                user_email:session?.user.email
                             })
                             .select()
                             .single()

    return NextResponse.json({data, error})   
}

