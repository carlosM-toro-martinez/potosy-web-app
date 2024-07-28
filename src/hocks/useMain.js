import { useState } from "react";

function useMain() {
  const [auth, setAuth] = useState(false);
  const [superAdmin, setSuperAdmin] = useState(true);
  const [token, setToken] = useState("");
  const [user, setUser] = useState();
  return {
    auth,
    token,
    user,
    superAdmin,
    setSuperAdmin,
    setUser,
    setToken,
    setAuth,
  };
}

export default useMain;
