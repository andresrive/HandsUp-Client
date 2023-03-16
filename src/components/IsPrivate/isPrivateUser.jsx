import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";

function IsPrivateUser({ children }) {
  const { isLoggedIn, isLoading, user } = useContext(AuthContext);

  // If the authentication is still loading ⏳
  if (isLoading) {
    return <Loading />;
  }

  if (!isLoggedIn || !user.isCompany) {
    // If the user is not logged in navigate to the login page ❌
    return <Navigate to="/" />;
  }

  if (isLoggedIn && user._id)
  // If the user is logged in, allow to see the page ✅
  return children;
}

export default IsPrivateUser;