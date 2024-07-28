import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MainContext } from "../context/MainContext";

function PrivateAdminUserRoute({ children, redirectPath }) {
  const { auth } = useContext(MainContext);
  return auth ? children : <Navigate to={redirectPath} />;
}

export default PrivateAdminUserRoute;
