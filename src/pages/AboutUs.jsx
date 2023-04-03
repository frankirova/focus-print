import { H2, ContainerData } from "../components";
import {
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export const AboutUs = () => {
  return (
    <Container maxW="1200px" minHeight="100vh" mb="1rem">
      <H2>Sobre Nosotros</H2>
      <Text fontSize="xl" fontWeight={500} my="2rem">
        Somos Focus Print, una empresa que tiene como prioridad dar respuesta a
        la problemática de unificación de servicios que se presenta en el
        mercado de la impresión 3D.
      </Text>
      <VStack spacing={16} mb="1remm">
        <Stack
          max-width="1200px"
          direction={["column", "column", "column", "row"]}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <ContainerData
            title="¿Como nace el nombre?"
            text='Francisco: “Al momento de crear el nombre, pensé en diversos conceptos como innovación, tecnología, modelado, producción, etc. Un día, navegando por las redes, vi un video en el que se mencionaba mucho la palabra “focus”, que traducido al español sería “enfoque”. Si buscamos su etimología, encontramos que uno de sus significados es: “Punto o lugar donde está concentrada una cosa y desde donde se propaga e influye”, por lo que me pareció ideal utilizarlo para el nombre de la empresa, ya que describia la prioridad del proyecto.Esa palabra me quedó resonando por mucho tiempo hasta que se me ocurrió pensar desde otra perspectiva, sabiendo que esta empresa se desarrolla en el mundo de la impresión 3D, decidí buscar un concepto que lo acompañe. Pensé en desarrollar el nombre en inglés ya que lo que me influyó provenía de ese idioma, traduje la palabra impresión al inglés siendo ésta “print”. Entonces nace “Focus Print", este concepto se puede explicar de la siguiente manera: “punto donde se concentra, propaga e influye en el mundo de la impresión 3D”.'
          />
          <Image src="//placehold.it/480x480"></Image>
        </Stack>
        <Flex
          max-width="1200px"
          direction={["column", "column", "column", "row"]}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <ContainerData
            title="¿Cual es nuestra finalidad?"
            text="Nuestra finalidad es brindar un servicio que responda a las diferentes demandas de las personas en relación a la impresión 3D. Nos propusimos como misión lograr la unificación de servicios y simplificar el acceso a productos o servicios de impresión 3D. Y como visión, ser referentes en el ámbito de la impresión 3D."
          />
          <Image src="//placehold.it/480x480"></Image>
        </Flex>
      </VStack>
    </Container>
  );
};
