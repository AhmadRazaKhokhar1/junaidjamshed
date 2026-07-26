import { Suspense } from "react";
import { getDummyData } from "../lib/helpers/dummy"
import Client from "../lib/components/client";

export default async function page() {
    const data = await getDummyData();
    return (
        <Suspense fallback={<p>Loading Data...</p>} key={"1"}>
            <div>
                <Client/>
            </div>
           <div className="flex flex-col-gap-1">
             {data?.map((item) => {
                return <span>{item.title}</span>
            })}
           </div>
        </Suspense>
    )
}
