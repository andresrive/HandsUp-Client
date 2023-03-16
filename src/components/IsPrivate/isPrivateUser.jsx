import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import { Navigate, useParams } from "react-router-dom"; 
import Loading from "../Loading/Loading";
import routeService from "../../services/route.service";

function IsPrivateUser({ children }) {
  const { isLoggedIn, isLoading, user } = useContext(AuthContext);
  const {planId} = useParams();
  const [plan, setPlan] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    routeService.getOnePlan(planId)
        .then((result) => {
            setPlan(result.data)
            setLoading(false)
        })
        .catch((err) => console.log(err));
}, []);

  // If the authentication is still loading ⏳
  if (isLoading) {
    return <Loading />;
  }

  if (!isLoggedIn || user.isCompany || user._id !== plan.author._id ) {
    // If the user is not logged in navigate to the login page ❌
    return <Navigate to="/" />;
  }

  return children

}

export default IsPrivateUser;