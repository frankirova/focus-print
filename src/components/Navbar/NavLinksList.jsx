import { NavLink } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const NavLinksList = ({ links }) => {
  return (
    <>
      {links.map((navDate) => (
        <Button
          key={navDate}
          as={NavLink}
          bg="black"
          color="white"
          to={`${navDate}`}
          fontSize={["sm", "sm", "lg", "xl"]}
          fontWeight="500"
        >
          {navDate}
        </Button>
      ))}
    </>
  );
};
