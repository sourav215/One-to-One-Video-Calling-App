import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Room from "./Room/Room";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Schedule from "./Schedule/Schedule";
import JoinMeeting from "./Join/JoinMeeting";
import ErrorPage from "../Components/Error/ErrorPage";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/join" element={<JoinMeeting />} />
      <Route path="/room/:roomID" element={<Room />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
export default AllRoutes;
