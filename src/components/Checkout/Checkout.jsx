import { useContext, useEffect } from "react";
import { CartContext } from "../../context";
import { useForm } from "../../hooks";
import { CheckoutCheckboxGroup, CheckoutInputGroup } from "../Checkout";
import { Flex, FormControl } from "@chakra-ui/react";

export const Checkout = () => {
  const { updateCheckout } = useContext(CartContext);

  const { formState, handleChange, handleSubmit, updateFormState } = useForm({
    email: "",
    direction: "",
    formaDePago: "",
  });

  useEffect(() => {
    updateCheckout(formState);
  }, [formState]);

  return (
    <>
      <FormControl onSubmit={handleSubmit}>
        <Flex direction="column" gap={2}>
          <CheckoutInputGroup handleChange={handleChange} />
          <CheckoutCheckboxGroup
            formState={formState}
            updateFormState={updateFormState}
          />
        </Flex>
      </FormControl>
    </>
  );
};
