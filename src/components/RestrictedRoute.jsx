import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const RestrictedRoute = ({ redirectTo = "/", component: Component }) => {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);
  return isUserLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
export default RestrictedRoute;
