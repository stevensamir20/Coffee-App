import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from '../store/auth-context';



export const CartRoute = () => {
    const authContext = useContext(AuthContext);

    return (
      authContext.isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    )
}

export const LoginRoute = () => {
    const authContext = useContext(AuthContext);

    return (
      authContext.isLoggedIn ?  <Navigate to="/" /> : <Outlet />
    )
}