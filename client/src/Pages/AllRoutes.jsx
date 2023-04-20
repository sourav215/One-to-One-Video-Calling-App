import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Room from "./Room/Room";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Schedule from "./Schedule/Schedule";
import JoinMeeting from "./Join/JoinMeeting";
import ErrorPage from "../Components/Error/ErrorPage";
import Logout from "../Components/Logout/Logout";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
      <Route
        path="/schedule"
        element={
          <PrivateRoute>
            <Schedule />
          </PrivateRoute>
        }
      />
      <Route
        path="/join"
        element={
          <PrivateRoute>
            <JoinMeeting />
          </PrivateRoute>
        }
      />
      <Route
        path="/room/:roomID"
        element={
          <PrivateRoute>
            <Room />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
export default AllRoutes;
