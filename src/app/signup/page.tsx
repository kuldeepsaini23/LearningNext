"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {toast} from "react-hot-toast";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try{
      setLoading(true);
      const response = await axios.post("/api/users/signup",user);
      console.log("Signup Success", response.data);
      toast.success("Signup Success");
      router.push("/login");

    }catch(error:any){
      console.group("Signup failed", error)
      toast.error("SignUp failed")
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ?  "Processing" : "Signup" }</h1>
      <hr />

      {/* username */}
      <label htmlFor="username">username</label>
      <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className="p-2 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-gray-300 text-black"
      />

      {/* Email */}
      <label htmlFor="email">email</label>
      <input
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        className="p-2 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-gray-300 text-black"
      />

      {/* Password */}
      <label htmlFor="password">password</label>
      <input
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        className="p-2 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-gray-300 text-black"
      />

      <button
        className="p-2 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-gray-300"
        onClick={onSignup}
      >
        {buttonDisabled ? "No Signup" : "Signup here" }
      </button>

      <Link href={"/login"}>Vist Login Page</Link>
    </div>
  );
}
