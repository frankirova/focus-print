import { Box, Image } from "@chakra-ui/react";
import { ButtonWhatsapp } from "../components/ButtonWhatsapp";

export const Home = () => {
  return (
    <>
      <Box>
        <Image
          w="full"
          h="80vh"
          objectFit="cover"
          src="assets/homefocus.jpg"
          alt="logo-focus-print"
        />
      </Box>
    </>
  );
};
