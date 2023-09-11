"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage(){
  const router = useRouter();
  const [user, setUser] = useState({
    email:"",
    password:"",
    // username:"",
  })

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [loading, setLoading] = useState(false);

  const onLogin = async ()=>{
    try{
      setLoading(true);
      const response = await axios.post("/api/users/login",user);
      console.log("Login Success", response.data);
      toast.success("Login Success");
      router.push("/profile");

    }catch(error:any){
      console.group("Login failed", error);
      toast.error("Login failed");
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);


  return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing" : "Login"}</h1>
      <hr/>

      {/* username */}
      {/* <label htmlFor="username">username</label>
      <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e)=> setUser({...user, username:e.target.value})}
        placeholder="username"
        className="p-2 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-gray-300"
      /> */}

      {/* Email */}
      <label htmlFor="email">email</label>
      <input
        id="email"
        type="email"
        value={user.email}
        onChange={(e)=> setUser({...user, email:e.target.value})}
        placeholder="email"
        className="p-2 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-gray-300 text-black"
      />

      {/* Password */}
      <label htmlFor="password">password</label>
      <input
        id="password"
        type="password"
        value={user.password}
        onChange={(e)=> setUser({...user, password:e.target.value})}
        placeholder="password"
        className="p-2 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-gray-300 text-black"
      />


      <button className="p-2 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-gray-300"
          onClick={onLogin}
        >
        {buttonDisabled ? "No Login" : "Login here"}
      </button>

      <Link href={"/signup"}>Vist Signup Page</Link>

    </div>
  )
}