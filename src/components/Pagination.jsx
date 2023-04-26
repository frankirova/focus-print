import { Button, Flex } from "@chakra-ui/react";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Pagination = ({ back, next }) => {
  return (
    <Flex justify="space-around">
      <Button
        display="flex"
        gap={2}
        bg="primary"
        color="white"
        fontWeight="200"
        size="lg"
        mt="1rem"
        _hover={{ color: "primary", bg: "secondary" }}
        onClick={back}
      >
        <FontAwesomeIcon icon={faCircleArrowLeft} />
        Anterior
      </Button>

      <Button
        display="flex"
        gap={2}
        bg="primary"
        color="white"
        fontWeight="200"
        size="lg"
        mt="1rem"
        _hover={{ color: "primary", bg: "secondary" }}
        onClick={next}
      >
        Siguiente
        <FontAwesomeIcon icon={faCircleArrowRight} />
      </Button>
    </Flex>
  );
};
