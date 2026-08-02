"use client";
import { useEffect, useState } from "react";
import { UserRole } from "@utils/enums";
import { useRouter } from "next/navigation";

export default function LoadingScreen() {
  // React Hooks
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(UserRole.USER);
  const [isLoading, setIsLoading] = useState(true);

  // NextJS Hooks
  const router = useRouter();

  // Custom Hooks

  // UseEffects
  useEffect(() => {
    const timerId = setTimeout(() => {
      // setIsLoading(false);
      setIsAuthenticated(true);
      setUserRole(UserRole.ADMIN);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [isLoading]);

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      if (userRole === UserRole.ADMIN) {
        router.replace("/dashboard");
      } else {
        router.replace("/home");
      }
    }
  }, [userRole, isAuthenticated, isLoading]);

    return (
      <div>
        <button
          onClick={() => {
            setIsLoading(false);
          }}
          className="m-2 border border-red-500"
        >
          click me to change the state
        </button>
        Loading Please Wait...
      </div>
    );

  return null;
}
