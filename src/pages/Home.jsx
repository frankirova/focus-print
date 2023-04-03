import { Box, Image } from "@chakra-ui/react";

export const Home = () => {
  return (
    <>
      <Box>
        <Image
          w="full"
          h="80vh"
          objectFit="cover"
          // src="assets/cubos.png"
          // src="//placehold.it/1280x500"
          src='assets/focus-fondo-home.jpg'
          alt="cubos"
        />
      </Box>
    </>
  );
};
