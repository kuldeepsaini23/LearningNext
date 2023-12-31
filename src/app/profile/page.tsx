"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      const response = await axios.get("api/users/logout");
      console.log(response);
      toast.success(response.data.message);
      router.push("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getUserDeatils = async () => {
    try {
      const response = await axios.get("api/users/me");
      console.log(response.data);
      setData(response.data.data._id);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <h2 className="p-3 rounded bg-green-500">
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
      <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded"
      >
        Logout
      </button>

      <button
        onClick={getUserDeatils}
        className="bg-purple-500 mt-4 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded"
      >
        Get User Details
      </button>
    </div>
  );
}
