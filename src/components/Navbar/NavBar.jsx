import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../../context";
import { LogOut, NavButtonGroup, NavLinksList } from "../../components";

import "../../styles/__navbar.css";
import { Flex, HStack, IconButton, Image } from "@chakra-ui/react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = () => {
  const links = ["Catalogo", "Contacto", "Sobre nosotros"];
  const [display, setDisplay] = useState("none");

  const { isLoggedIn } = useContext(authContext);

  return (
    <Flex
      // minW="100vw"
      mt="auto"
      justify="space-around"
      bgColor="black"
      minH="10vh"
    >
      <Flex
        minW="90vw"
        fontSize="xl"
        mx="2rem"
        justify="space-between"
        align="center"
      >
        <NavLink to="/">
          <Image src="/assets/nav (1).jpg" alt="logo-focus"></Image>
        </NavLink>

        <Flex
          fontSize={["sm", "sm", "sm", "lg"]}
          p={4}
          gap="1.4rem"
          display={["none", "none", "flex", "flex"]}
        >
          <NavLinksList links={links} setDisplay={setDisplay} />
        </Flex>

        <Flex
          gap={3}
          fontSize="2xl"
          width="100vw"
          height="100vh"
          p={6}
          bg={"white"}
          zIndex={20}
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
          display={display}
        >
          <HStack justify="end" align>
            <IconButton
              color="primary"
              size="lg"
              icon={<FontAwesomeIcon icon={faXmark} />}
              onClick={() => setDisplay("none")}
            />
          </HStack>
          <NavLinksList links={links} setDisplay={setDisplay} />
          {isLoggedIn ? <LogOut /> : <NavButtonGroup setDisplay={setDisplay} />}
        </Flex>
        <Flex gap={2}>
          <Flex display={["none", "none", "flex", "flex"]}>
            {isLoggedIn ? <LogOut /> : <NavButtonGroup />}
          </Flex>

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
