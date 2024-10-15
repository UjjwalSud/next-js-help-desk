"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation";

export default function LogoutButton() {

    
    const handleLogout = async() => {
        const router = useRouter();

        const supabase = createClientComponentClient();
        const { error } = await supabase.auth.signOut();

        if(!error)
        {
            router.push('/login');
        }

        if(error)
        {
            console.log(error)
        }
    }

    return (
        <button className="btn-primary" onClick={handleLogout}>
            Logout
        </button>
    )
}