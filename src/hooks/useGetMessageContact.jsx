export const useGetMessageContact = (formState) => {
  const message = `- *Nombre*: ${formState.name} \n- *Email*: ${formState.email} \n- *Mensaje*: ${formState.message}`;
  return { message };
};
