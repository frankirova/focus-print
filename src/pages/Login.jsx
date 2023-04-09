import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context";
import { useForm } from "../hooks";
import { MyDivider } from "../components";

import { Input, Flex, Heading, Button, Box, Text } from "@chakra-ui/react";

export const Login = () => {
  const { login, error, setIsLoggedIn, loginWhitGoogle } =
    useContext(authContext);

  const { formState, handleChange, handleSubmit } = useForm();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const error = await login(formState.email, formState.password);

    if (!error) {
      navigate("/Catalogo");
      setIsLoggedIn(true);
    }
  };
  const handleLoginWithGoogle = async () => {
    const error = await loginWhitGoogle();

    if (!error) {
      navigate("/Catalogo");
      setIsLoggedIn("true");
    }
  };

  return (
    <Flex height="80vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        maxW="30rem"
        background="gray.100"
        p={12}
        rounded={6}
      >
        <Heading fontFamily="big_noodle" mb={6}>
          Iniciar sesion
        </Heading>
        {error && <Text color="red">{error}</Text>}
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            placeholder="focusprint@gmail.com.ar"
            variant="failed"
            mb={3}
            type="email"
            name="email"
          />
          <Input
            onChange={handleChange}
            placeholder="********"
            variant="failed"
            mb={6}
            type="password"
            name="password"
          />
          <Button
            onClick={handleLoginWithGoogle}
            w="full"
            my={4}
            bg="primary"
            color="white"
            fontWeight="500"
            _hover={{ color: "primary", bg: "secondary" }}
          >
            Login whit Google
          </Button>
          <MyDivider />
          <Box as="footer">
            <Button
              onClick={handleLogin}
              type="submit"
              bg="primary"
              color="white"
              w="full"
              mb="1rem"
              fontWeight="500"
              _hover={{ color: "primary", bg: "secondary" }}
            >
              Iniciar sesion
            </Button>
            <Button
              as={Link}
              to="/registrarse"
              bg="secondary"
              color="primary"
              w="full"
              marginBottom="1rem"
              fontWeight="500"
            >
              Registrarse
            </Button>
          </Box>
        </form>
      </Flex>
    </Flex>
  );
};
