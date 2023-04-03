import { NavLink } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";
export const NavButtonGroup = () => {
  return (
    <Flex gap={3} justify='space-between'>
      <Button
        as={NavLink}
        to="/iniciar-sesion"
        // size={["sm", "sm", "sm", "md"]}
        variant="outline"
        fontSize={["sm", "sm", "lg", "xl"]}
        fontWeight="500"
        bg="primary"
        color="white"
      >
        Iniciar sesion
      </Button>
      <Button
        as={NavLink}
        to="/registrarse"
        // size={["sm", "sm", "sm", "md"]}
        variant="outline"
        fontSize={["sm", "sm", "lg", "xl"]}
        fontWeight="500"
        bg="primary"
        color="white"
      >
        Registrarse
      </Button>
    </Flex>
  );
};
