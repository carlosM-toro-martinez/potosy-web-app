import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { MainContext } from '../context/MainContext';


const PrivateAdminRoute = ({ children, redirectPath }) => {
  const { auth, user } = useContext(MainContext);
  return auth && !user ? (
    children
  ) : (
    <Navigate to={redirectPath} />
  );
};

export default PrivateAdminRoute