import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const useForm = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw Error;
  }

  return context;
};

export default useForm;
