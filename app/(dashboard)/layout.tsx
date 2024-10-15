import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Navbar from "../components/Navbar";
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";
export default async function DashboardLayout({children}: {
    children: React.ReactNode
  })
{
    const supabase = createServerComponentClient({cookies});
    const {data} = await supabase.auth.getSession()

    if(!data.session)
    {
        redirect('/login')
    }

    return (
        <>
            <Navbar data={data.session?.user}/>
            {children}
        </>
    )
}