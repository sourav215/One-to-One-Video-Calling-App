import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Text,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MeetingCard from "../../Components/MeetingCard/MeetingCard";

function JoinMeeting() {
  const [loading, setLoading] = useState(true);
  const [allMeeting, setAllMeeting] = useState([]);
  const toast = useToast({ position: "top" });

  const getAllUpcommingMeetings = async () => {
    try {
      setLoading(true);

      let response = await fetch("http://localhost:8080/meeting/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      });
      let data = await response.json();
      console.log(data);

      if (data.success) {
        setLoading(false);
        console.log(data);
        setAllMeeting(data.data);
      }
    } catch (error) {
      console.log(error);
      toast({
        title: `Couldn't Get Data`,
        status: "error",
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    getAllUpcommingMeetings();
  }, []);
  if (loading) {
    return (
      <Flex align={"center"} justify={"center"} p={"20"}>
        <Spinner
          alignItems={"center"}
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="teal.500"
          size="xl"
        />
      </Flex>
    );
  }
  return (
    <Box>
      {allMeeting.map((elem, i) => {
        return <MeetingCard elem={elem} key={i} />;
      })}
    </Box>
  );
}
export default JoinMeeting;
