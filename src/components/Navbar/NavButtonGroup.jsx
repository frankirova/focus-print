import { NavLink } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";

export const NavButtonGroup = ({ setDisplay }) => {
  return (
    <Flex gap={3} justify="space-between">
      <Button
        as={NavLink}
        to="/login"
        fontSize={["sm", "sm", "lg", "xl"]}
        fontWeight="500"
        bg="primary"
        color="white"
        // onClick={() => setDisplay("none")}
      >
        Iniciar sesion
      </Button>
      <Button
        as={NavLink}
        to="/signup"
        fontSize={["sm", "sm", "lg", "xl"]}
        fontWeight="500"
        bg="primary"
        color="white"
        // onClick={() => setDisplay("none")}
      >
        Registrarse
      </Button>
    </Flex>
  );
};
