import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [formState, setFormState] = useState(initialValue);

  const handleChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleReset = () => {
    setFormState(initialValue);
  };

  const updateFormState = (newValue) => {
    setFormState(newValue);
  };
  return {
    formState,
    ...formState,
    handleChange,
    handleSubmit,
    handleReset,
    updateFormState,
  };
};
