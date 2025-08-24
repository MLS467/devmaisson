import { createContext } from "react";

export type FormContextType = {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<FormContextType["formData"]>
  >;
};

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);
