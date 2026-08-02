"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const WelcomeButtonAbout = () => {
    // react hooks
  const [pageTitle, setPageTitle] = useState("My Name Before Click");

  // nextjs hooks
  const router = useRouter()

    useEffect(()=>{
        const timerId = setTimeout(() => {
            alert("Hi this is an alert")
        }, 2000);

        return () => {
            clearTimeout(timerId)
        }
    },[])
    
  return (
    <button
      onClick={() => {
        setPageTitle("My Name After Click");
        router.replace("/")
      }}
      className="border border-red-500 p-2 m-2"
    >
      {pageTitle}
    </button>
  );
};
