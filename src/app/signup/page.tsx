"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios";

export default function SignupPage(){

  const [user, setUser] = useState({
    email:"",
    password:"",
    username:"",
  })

  const onSignup = async ()=>{
    console.log("Hello World");
  }

  return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup</h1>
      <hr/>

      {/* username */}
      <label htmlFor="username">username</label>
      <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e)=> setUser({...user, username:e.target.value})}
        placeholder="username"
        className="p-2 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-gray-300"
      />

      {/* Email */}
      <label htmlFor="email">email</label>
      <input
        id="email"
        type="email"
        value={user.email}
        onChange={(e)=> setUser({...user, email:e.target.value})}
        placeholder="email"
        className="p-2 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-gray-300"
      />

      {/* Password */}
      <label htmlFor="password">password</label>
      <input
        id="password"
        type="password"
        value={user.password}
        onChange={(e)=> setUser({...user, password:e.target.value})}
        placeholder="password"
        className="p-2 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-gray-300"
      />


      <button className="p-2 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-gray-300"
          onClick={onSignup}
        >
        Signup here
      </button>

      <Link href={"/login"}>Vist Login Page</Link>

    </div>
  )
}