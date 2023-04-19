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
} from "@chakra-ui/react";

function JoinMeeting() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
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
              Medium length title
            </chakra.h2>
            <Button colorScheme="green" size="md">
              Join Now
            </Button>
          </VStack>
        </GridItem>
        <GridItem alignItems={"left"}>
          {/* <Flex> */}
          <Box textAlign={"left"}>
          <chakra.p>
              Provide your customers a story they would enjoy keeping in mind
              the objectives of your website. Pay special attention to the tone
              of voice.
            </chakra.p>
            <chakra.p>
              Provide your customers 
            </chakra.p>
          </Box>
            
          {/* </Flex> */}
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
    </Box>
  );
}
export default JoinMeeting;
