import { FormLabel, Input } from "@chakra-ui/react";

export const CheckoutInputGroup = ({ handleChange }) => {
  return (
    <>
      <FormLabel>Email</FormLabel>
      <Input
        onChange={handleChange}
        isRequired
        name="email"
        type="text"
        size="md"
        focusBorderColor="primary"
      />
      <FormLabel>Direccion</FormLabel>
      <Input
        onChange={handleChange}
        isRequired
        name="direction"
        type="text"
        size="md"
        focusBorderColor="primary"
      />
    </>
  );
};
