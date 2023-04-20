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
import { Link, useNavigate } from "react-router-dom";

function MeetingCard({
  elem: { topic, meetingLink, hostEmail, participants, dateandtime, duration },
}) {
  const navigate = useNavigate();
  return (
    <Box as={Container} maxW="7xl" mt={14} p={2} >
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              {topic}
            </chakra.h2>
            <Button
              colorScheme="green"
              size="md"
              onClick={() => {
                window.location.href = meetingLink;
              }}
            >
              Join Now
            </Button>
          </VStack>
        </GridItem>
        <GridItem alignItems={"left"}>
          {/* <Flex> */}
          <Box textAlign={"left"}>
            <chakra.p>
              <span style={{ fontWeight: "600" }}>Host: </span> {hostEmail}
            </chakra.p>
            <chakra.p>
              <span style={{ fontWeight: "600" }}>Participants: </span>{" "}
              {participants.join(", ")}
            </chakra.p>
            <chakra.p>
              <span style={{ fontWeight: "600" }}>Date and Time: </span>{" "}
              {dateandtime}
            </chakra.p>
            <chakra.p>
              <span style={{ fontWeight: "600" }}>Duration: </span> {duration}
            </chakra.p>
            <chakra.p>
              <span style={{ fontWeight: "600" }}>Link : </span>{" "}
              <Link to={meetingLink}>{meetingLink}</Link>
            </chakra.p>
          </Box>

          {/* </Flex> */}
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
    </Box>
  );
}
export default MeetingCard;
