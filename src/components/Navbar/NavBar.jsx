import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../../context/authContext";

import { Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { UserMenu, NavButtonGroup, NavLinksList } from "..";

import "../../styles/__navbar.css";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { useGetNavDates } from "../hooks";

export const NavBar = () => {
  const links = ["Catalogo", "Contacto", "Sobre nosotros"];
  // const { navDate, isLoading } = useGetNavDates();
  const [display, setDisplay] = useState("none");

  const { isLoggedIn } = useContext(authContext);

  return (
    <Flex mt="auto" justify="space-between" bgColor="black" minH="10vh">
      <Flex
        minW="90vw"
        fontSize="xl"
        mx="2rem"
        justify="space-between"
        align="center"
      >
        <NavLink to="/">
          {/* <Image src="//placehold.it/128x64" borderRadius="10px"></Image> */}
          <Text as="h2" letterSpacing=".2rem" fontWeight="bold" fontSize="2rem" color='white'>
            F<span>O</span>CUS PRINT
          </Text>
        </NavLink>

        <Flex
          fontSize={["sm", "sm", "sm", "lg"]}
          p={4}
          gap="1.4rem"
          display={["none", "none", "flex", "flex"]}
        >
          <NavLinksList links={links} />
        </Flex>
        <Flex
          gap={3}
          fontSize="2xl"
          width="100vw"
          height="100vh"
          bg={"white"}
          zIndex={20}
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
          display={display}
        >
          <Flex justify="end">
            <IconButton
              color="primary"
              size="lg"
              icon={<FontAwesomeIcon icon={faXmark} />}
              onClick={() => setDisplay("none")}
            />
          </Flex>
          <NavLinksList links={links} />
        </Flex>
        <Flex gap={2}>
          {isLoggedIn ? (
            <>
              <UserMenu />
            </>
          ) : (
            <NavButtonGroup />
          )}

          <IconButton
            color="primary"
            icon={<FontAwesomeIcon size="xl" icon={faBars} />}
            display={["flex", "flex", "none", "none"]}
            onClick={() => setDisplay("flex")}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
