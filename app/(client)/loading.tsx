import { Skeleton } from "@app/lib/ui/useable-components";

export default function Loading(){
    return <div className="w-full min-h-screen flex flex-col gap-2">
        {
            Array.from({length:20}).map((item, index)=>{
                return <div className="flex gap-2 items-center justify-center">
                    <Skeleton className="min-w-12 min-h-12 max-w-12 max-h-12 rounded-full" key={index}/>
                    <Skeleton className="min-w-24 min-h-14" key={index}/>
                </div>
            })
        }
    </div>
}