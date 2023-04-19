import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Stack, Text, Link } from "@chakra-ui/react";
import { ArrowForwardIcon, CalendarIcon } from "@chakra-ui/icons";

function Home() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    // <div className={styles.home}>
    //   <h1>Home</h1>
    //   <input
    //     type="text"
    //     placeholder="Enter room code"
    //     onChange={handleInputChange}
    //   />
    //   <button
    //     onClick={() => {
    //       navigate(`/room/${input}`);
    //     }}
    //   >
    //     Join
    //   </button>
    // </div>
    <Flex
      align={"center"}
      justifyContent={"center"}
      //   marginTop={"100px"}
      bg={"gray.50"}
      h={"90vh"}
    >
      <Box>
        <Stack marginBottom={"80px"}>
          <Text fontSize={"2em"}>
            One Platform to <Link color={"teal"}>Connect</Link>
          </Text>
        </Stack>
        <Stack direction="row" spacing={4}>
          <Button
            leftIcon={<CalendarIcon />}
            colorScheme="teal"
            variant="solid"
            onClick={() => {
              navigate("/schedule");
            }}
          >
            Schedule a Meeting
          </Button>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="outline"
            onClick={() => {
              navigate("/join");
            }}
          >
            Join Meeting
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}
export default Home;
