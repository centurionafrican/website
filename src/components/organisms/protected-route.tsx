"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/userContext";
import { useFetch } from "@/hooks";
import { fetchUserProfile } from "@/services/user";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { isAuthenticated, setUser } = useUser();

  const { data } = useFetch(["profile"], () => fetchUserProfile());

  useEffect(() => {
    // if (!isAuthenticated) {
    //   router.push("/login");
    // }
    data && setUser(data.response);
  }, [isAuthenticated, router, data]);

  return isAuthenticated ? <>{children}</> : null;
};

export default PrivateRoute;
