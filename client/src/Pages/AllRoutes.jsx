import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home";
import Room from "./Room/Room";
function AllRoutes(){
 return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/room/:roomID" element={<Room/>}/>
    </Routes>
 )
}
export default AllRoutes;