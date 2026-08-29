import { twMerge } from "tailwind-merge";
import { ISkeleton } from "@utils/interfaces";

export const Skeleton = ({ className, children }: ISkeleton) => {
  return (
    <div className={twMerge("bg-gray-300 animate-pulse h-6 max-h-screen w-full container mx-auto", className)}>
      {children}
    </div>
  );
};
