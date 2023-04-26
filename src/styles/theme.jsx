import { extendTheme } from "@chakra-ui/react";

export const MyNewTheme = extendTheme({
  colors: {
    primary: "#66b232",
    secondary: "#ecf2f6",
  },
  fonts: {
    body: "big_noodle",
  },
  styles: {
    global: {
      body: {
        fontFamily: "body",
        fontWeight: "normal",
        letterSpacing: "0.06em",
      },
      button: {
        letterSpacing: "0.06em",
        variant: "solid",
        bg: "primary",
        color: "white",
        fontSize: ["sm", "sm", "lg", "lg"],
        fontWeight: "500",
        _hover: { color: "primary", bg: "secondary" },
      },
    },
  },
});
