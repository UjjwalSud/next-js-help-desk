"use client"

import { useState } from "react";

interface AuthForm  
{    
    handleSubmit: (e:any,email:string,password:string) => void;
 }

const AuthForm: React.FC<AuthForm> = async ({handleSubmit})  =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form onSubmit={(e)=>handleSubmit(e,email,password)}>
            <label>
                <span>
                    Email:
                </span>
                <input type="email"
                onChange={(e) => setEmail(e.target.value)}
                value = {email}
                required
                />
            </label>
            <label>
                <span>
                    Password:
                </span>
                <input type="password"
                onChange={(e) => setPassword(e.target.value)}
                value = {password}
                required
                />
            </label>
            <button className="btn-primary">Submit</button>
        </form>
    )
}

export default AuthForm;