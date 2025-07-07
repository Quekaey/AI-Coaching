import React, { useEffect } from "react";
import { useUser } from "@stackframe/stack";

function AuthProvider({ children }) {
  const user = useUser();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return <div>{children}</div>;
}

export default AuthProvider;
