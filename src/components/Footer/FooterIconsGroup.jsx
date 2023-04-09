import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export const FooterIconsGroup = () => {
  return (
    <Flex
      justify="center"
      textAlign="center"
      w="18rem"
      p={3}
      borderRadius="25px"
    >
      <Link href="https://www.instagram.com/focusprint2021/">
        <i className="fa-brands fa-instagram icon-footer"></i>
      </Link>
      <Link href="https://www.instagram.com/focusprint2021/">
        <i className="fa-brands fa-tiktok icon-footer"></i>
      </Link>
      <Link href="https://api.whatsapp.com/send?phone=543512274743&text=Hola,%20tengo%20una%20consulta">
        <i className="fa-brands fa-whatsapp icon-footer"></i>
      </Link>
      <Link href="https://www.gmail.com">
        <i className="fa-solid fa-envelope icon-footer"></i>
      </Link>
    </Flex>
  );
};
