import { createContext } from "react";

export type FormContextType = {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
};

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);
