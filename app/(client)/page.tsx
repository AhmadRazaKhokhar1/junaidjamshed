"use client";
import {useEffect, useState } from "react";
import Loading from "./loading";

export default function page() {
  const [dataFetched, setDataFetched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchSampleData() {
    setIsLoading(true)
    const suspenseData = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = await suspenseData.json();
    console.log(data, "data from sample Date");
    setDataFetched(data);
    setIsLoading(false)
  }

  useEffect(() => {
     fetchSampleData();
  }, []);

  if(isLoading) return <Loading />
  else return (
    <div className="min-w-34 min-h-34">
      {dataFetched?.map((item, index) => {
        return <div key={index}>{item.title}</div>;
      })}
    </div>
  );
}
