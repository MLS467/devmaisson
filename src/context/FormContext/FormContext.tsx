import { createContext } from "react";
import type ReCAPTCHA from "react-google-recaptcha";

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
  recaptchaRef: React.RefObject<ReCAPTCHA | null>;
  captchaOk: boolean;
  setCaptchaOk: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);
