import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context";
import { useForm } from "../hooks";
import {
  Heading,
  Input,
  Flex,
  Button,
  FormLabel,
  Text,
} from "@chakra-ui/react";

export const Signup = () => {
  const { formState, handleChange } = useForm();

  const { signup, error, setIsLoggedIn } = useContext(authContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = await signup(formState.email, formState.password);

    if (!error) {
      navigate("/");
      setIsLoggedIn(true);
    }
  };
  return (
    <Flex minH="80vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        maxW="30rem"
        background="gray.100"
        p={12}
        rounded={6}
      >
        <Heading fontFamily="big_noodle" mb={6}>
          Registrarse
        </Heading>
        {error && <Text color="red">{error}</Text>}

        <form onSubmit={handleSubmit}>
          <FormLabel>Nombre y apellido</FormLabel>
          <Input
            placeholder="Lautaro Diaz"
            variant="failed"
            onChange={handleChange}
            mb={3}
            type="text"
            name="name"
          />
          <FormLabel>Mail</FormLabel>
          <Input
            placeholder="lautarodiaz@gmail.com"
            variant="failed"
            onChange={handleChange}
            mb={3}
            type="email"
            name="email"
          />
          <FormLabel>Contraseña</FormLabel>
          <Input
            placeholder="********"
            variant="failed"
            onChange={handleChange}
            mb={3}
            type="password"
            name="password"
          />

          <Button
            my={2}
            type="submit"
            bg="primary"
            color="white"
            fontWeight="500"
            _hover={{ color: "primary", bg: "secondary" }}
          >
            Registrarse
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};
