import { useGetContactDates } from "../hooks";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Spinner,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  const { isLoading, contactDate } = useGetContactDates();

  if (isLoading)
    return (
      <Flex height="80vh" alignItems="center" justifyContent="center">
        <Spinner size="xl" color="green" />
      </Flex>
    );
  return (
    <Container
      bg="#fff"
      maxW="full"
      mt={0}
      centerContent
      placeContent="center"
      placeItems="center"
      overflow="hidden"
      minH="80vh"
    >
      <Flex>
        <Box
          bg="rgba(236,242,246,255)"
          color="black"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Flex placeItems="center" direction="column">
                  <Heading fontFamily="big_noodle">Contacto</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="black">
                    Rellene el siguiente formulario para contactarnos
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    {contactDate.map((contactDate) => (
                      <Flex
                        key={contactDate}
                        pl={0}
                        spacing={3}
                        alignItems="flex-start"
                        justifyContent="center"
                      >
                        <Button
                          textAlign="start"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#000"
                          fontSize="1.1rem"
                          _hover={{ border: "2px solid #000" }}
                          leftIcon={<FontAwesomeIcon icon={faPhone} />}
                        >
                          {contactDate.phone}
                        </Button>

                        <Button
                          textAlign="start"
                          height="48px"
                          width="210px"
                          variant="ghost"
                          color="#000"
                          fontSize="1.1rem"
                          _hover={{ border: "2px solid #000" }}
                          leftIcon={<FontAwesomeIcon icon={faEnvelope} />}
                        >
                          {contactDate.email}
                        </Button>
                      </Flex>
                    ))}
                  </Box>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg" minW={["sm", "md"]}>
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Nombre</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none" />
                          <Input
                            type="text"
                            size="md"
                            focusBorderColor="primary"
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none" />
                          <Input
                            type="text"
                            size="md"
                            focusBorderColor="primary"
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mensaje</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          focusBorderColor="primary"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="Mensaje..."
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          fontWeight="500"
                          bg="primary"
                          color="white"
                          _hover={{}}
                        >
                          Enviar mensaje
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};
