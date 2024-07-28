import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MainContext } from "../context/MainContext";

const PrivateAdminRoute = ({ children, redirectPath }) => {
  const { auth, superAdmin } = useContext(MainContext);
  return auth && superAdmin ? children : <Navigate to={redirectPath} />;
};

export default PrivateAdminRoute;
