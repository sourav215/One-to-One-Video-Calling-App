import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context/ContexProvider";
import { useContext } from "react";

function Logout() {
  const navigate = useNavigate();
  const { toggleIsAuth } = useContext(MyContext);
  return (
    <Box p={"30"}>
      <Button
        colorScheme="teal"
        variant="solid"
        onClick={() => {
          sessionStorage.removeItem("accessToken");
          toggleIsAuth(false);
          navigate("/login");
        }}
      >
        Logout
      </Button>
    </Box>
  );
}
export default Logout;
