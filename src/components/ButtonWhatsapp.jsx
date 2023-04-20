import { Button, Link } from "@chakra-ui/react";
import "../styles/__ButtonWhatsapp.css";
export const ButtonWhatsapp = () => {
  return (
    <Button
      w="60px"
      h="60px"
      pos="fixed"
      right="4rem"
      bottom="8rem"
      borderRadius="full"
      bg="whatsapp.600"
      color="white"
    >
      <Link color={"white"} href="https://api.whatsapp.com/send?phone=543512274743&text=Hola,%20tengo%20una%20consulta">
        <i className="fa-brands fa-whatsapp"></i>
      </Link>
    </Button>
  );
};
