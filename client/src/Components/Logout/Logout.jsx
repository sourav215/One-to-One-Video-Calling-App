import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  return (
    <Box p={"30"}>
      <Button
        colorScheme="teal"
        variant="solid"
        onClick={() => {
          localStorage.removeItem("accessToken");
          navigate("/login");
        }}
      >
        Logout
      </Button>
    </Box>
  );
}
export default Logout;
