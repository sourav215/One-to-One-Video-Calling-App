import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  { title: "Home", path: "/" },
  // { title: "Login", path: "/login" },
  { title: "Schedule", path: "/schedule" },
  { title: "Join", path: "/join" },
];

const NavLink = ({ title, path }) => <Link to={path}>{title}</Link>;

const Navbar = () => {
  const isAuth = sessionStorage.getItem("accessToken") ? true : false;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="white.100" px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          fontSize={"xl"}
        >
          <HStack spacing={8} alignItems={"center"}>
            <Box fontSize={"2xl"} fontWeight={"semibold"} color={"teal.600"}>
              {" "}
              <Link to={"/"}>Video Call App</Link>
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={20}
              fontWeight={"semibold"}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ title, path }) => (
                <NavLink key={title} title={title} path={path} />
              ))}
              {isAuth ? (
                <NavLink key={"logout"} title={"Logout"} path={"/logout"} />
              ) : (
                <NavLink key={"login"} title={"Login"} path={"/login"} />
              )}
            </HStack>
          </Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ title, path }) => (
                <NavLink key={title} title={title} path={path} />
              ))}
              {isAuth ? (
                <NavLink key={"logout"} title={"Logout"} path={"/logout"} />
              ) : (
                <NavLink key={"login"} title={"Login"} path={"/login"} />
              )}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Divider />
    </>
  );
};

export default Navbar;
