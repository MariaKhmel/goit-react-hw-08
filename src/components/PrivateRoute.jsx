import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const PrivateRoute = ({ redirectTo = "/", component: Component }) => {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);
  return isUserLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
