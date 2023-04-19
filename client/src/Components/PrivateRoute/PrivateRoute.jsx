import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = sessionStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return children;
}
export default PrivateRoute;
