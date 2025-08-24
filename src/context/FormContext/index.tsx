import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useState } from "react";
import type { ReactNode } from "react";
import { FormContext } from "./FormContext";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormContextProviderProps = {
  children: ReactNode;
};

export type FormContextType = {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
};

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome é obrigatório")
      .min(2, "Nome deve ter pelo menos 2 caracteres")
      .max(50, "Nome deve ter no máximo 50 caracteres"),
    email: yup
      .string()
      .required("Email é obrigatório")
      .email("Digite um email válido"),
    subject: yup
      .string()
      .required("Assunto é obrigatório")
      .min(3, "Assunto deve ter pelo menos 3 caracteres")
      .max(100, "Assunto deve ter no máximo 100 caracteres"),
    message: yup
      .string()
      .required("Mensagem é obrigatória")
      .min(10, "Mensagem deve ter pelo menos 10 caracteres")
      .max(1000, "Mensagem deve ter no máximo 1000 caracteres"),
  });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validação com Yup
      await validationSchema.validate(formData, { abortEarly: false });

      // Se chegou aqui, a validação passou
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Maisson",
        current_date: new Date().toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "America/Sao_Paulo",
        }),
      };

      // Enviar email
      const result = await emailjs.send(
        import.meta.env.VITE_SERVICE_EMAIL_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY_ID
      );

      if (result.status === 200) {
        // Sucesso - mostrar toast de sucesso
        toast.success("Email enviado com sucesso! Obrigado pelo contato.");

        // Limpar formulário
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error: unknown) {
      // Verificar se é erro de validação do Yup
      if (error instanceof yup.ValidationError) {
        // Mostrar todos os erros de validação
        if (error.errors.length > 0) {
          toast.error(`${error.errors[0]}`);
        }
      } else {
        // Erro do EmailJS ou outro erro
        console.error("Erro ao enviar email:", error);
        toast.error("Erro ao enviar email. Tente novamente em alguns minutos.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        handleInputChange,
        handleSubmit,
        isSubmitting,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContext };
export default FormContextProvider;
