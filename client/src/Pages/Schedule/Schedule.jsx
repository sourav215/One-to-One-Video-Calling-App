import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

function Schedule() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Schedule Meeting
        </Heading>
        <FormControl>
          <FormLabel>Topic</FormLabel>
          <Input
            placeholder="Interview"
            _placeholder={{ color: "gray.500" }}
            type="text"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Date and Time</FormLabel>
          <Input _placeholder={{ color: "gray.500" }} type="datetime-local" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Duration</FormLabel>
          <Select size="lg">
            <option>15 min</option>
            <option>30 min</option>
            <option>60 min</option>
          </Select>
        </FormControl>
        <FormControl >
          <FormLabel>Invite Participant</FormLabel>
          <Input
            placeholder="abcd@gmail.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"teal.400"}
            color={"white"}
            _hover={{
              bg: "teal.500",
            }}
          >
            Create
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
export default Schedule;
