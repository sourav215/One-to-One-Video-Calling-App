import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isAuth } =
    JSON.parse(sessionStorage.getItem("videocallingapp")) || {};

  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }

  return children;
}
export default PrivateRoute
