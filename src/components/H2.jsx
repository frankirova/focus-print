import { Heading } from "@chakra-ui/react";
export const H2 = ({ children }) => {
  return (
    <>
      <Heading
        as="h2"
        fontFamily="big_noodle"
        textAlign="center"
        bg="primary"
        color="white"
        my={3}
        p={3}
      >
        {children}
      </Heading>
    </>
  );
};
