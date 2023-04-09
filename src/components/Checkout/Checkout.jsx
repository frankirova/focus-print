import { useContext, useEffect } from "react";
import { CartContext } from "../../context";
import { useForm } from "../../hooks";
import { CheckoutCheckboxGroup, CheckoutInputGroup } from ".";
import { Flex, FormControl, Text } from "@chakra-ui/react";

export const Checkout = () => {
  const { updateCheckout } = useContext(CartContext);
  const initialValue = {
    email: "",
    direction: "",
    formaDePago: "",
  };
  const validateForm = (formState) => {
    let hasError = {};
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!formState.email.trim()) {
      hasError.email = "El campo email es requerido";
    } else if (!regexEmail.test(formState.email.trim())) {
      hasError.email = "Formato incorrecto";
    }
    if (!formState.direction.trim()) {
      hasError.direction = "La direccion es requerida";
    }
    if (!formState.formaDePago.trim()) {
      hasError.formaDePago = "El metodo de pago es requerido";
    }
    return hasError;
  };
  const {
    formState,
    handleChange,
    handleSubmit,
    updateFormState,
    hasError,
    handleBlur,
  } = useForm(initialValue, validateForm);

  useEffect(() => {
    updateCheckout(formState);
  }, [formState]);

  return (
    <>
      <FormControl onSubmit={handleSubmit}>
        <Flex direction="column" gap={2}>
          <CheckoutInputGroup
            handleChange={handleChange}
            handleBlur={handleBlur}
            hasError={hasError}
          />
          <CheckoutCheckboxGroup
            formState={formState}
            updateFormState={updateFormState}
            hasError={hasError}
          />
          {hasError && <Text color="red">{hasError.formaDePago}</Text>}
        </Flex>
      </FormControl>
    </>
  );
};
