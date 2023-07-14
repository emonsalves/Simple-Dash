import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm); // formState es el estado del formulario

  const onInputChange = ({ target }) => {
    // target es el input que se está modificando
    const { name, value } = target; // name es el nombre del input, value es el valor del input
    setFormState({
      ...formState,
      [name]: value,
    }); // Se actualiza el estado del formulario
  };

  const onResetForm = () => {
    setFormState(initialForm); // Se resetea el estado del formulario
  };

  return { formState, onInputChange, onResetForm }; // Devolver el estado del formulario, la función para modificar el estado y la función para resetear el estado
};
