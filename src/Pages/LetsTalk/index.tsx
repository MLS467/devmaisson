import React, { useState } from "react";
import HeaderPagesDefault from "../../components/HeaderPagesDefault";
import ButtonCard from "../../components/ButtonCard";
import { FaPaperPlane } from "react-icons/fa";
import { useTheme } from "../../Hooks/useTheme";
import { LetsTalkData } from "../../mocks/LetsTalkData";
import {
  LetsTalkContainer,
  ContentContainer,
  LeftSection,
  RightSection,
  ContactInfo,
  ContactItem,
  ContactIcon,
  ContactDetails,
  ContactTitle,
  ContactValue,
  FormContainer,
  FormTitle,
  FormGrid,
  FormGroup,
  Label,
  Input,
  TextArea,
} from "./style";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import * as yup from "yup";

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

const LetsTalk = () => {
  const { palette } = useTheme();

  const [formData, setFormData] = useState({
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

  const handleSubmit = async (e: any) => {
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
    } catch (error: any) {
      // Verificar se é erro de validação do Yup
      if (error.name === "ValidationError") {
        // Mostrar todos os erros de validação
        error.errors.forEach((errorMessage: string) => {
          toast.error(`${errorMessage}`);
        });
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
    <LetsTalkContainer $palette={palette}>
      <HeaderPagesDefault title="Entre em Contato" description="" />

      <ContentContainer>
        <LeftSection $palette={palette}>
          <p>
            Estou sempre interessado em novos projetos, oportunidades de
            trabalho e conversas sobre tecnologia. Vamos criar algo incrível
            juntos!
          </p>

          <ContactInfo>
            <ContactItem>
              <ContactIcon $palette={palette}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z" />
                </svg>
              </ContactIcon>
              <ContactDetails>
                <ContactTitle $palette={palette}>Email</ContactTitle>
                <ContactValue $palette={palette}>
                  {LetsTalkData.email}
                </ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <ContactIcon $palette={palette}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                </svg>
              </ContactIcon>
              <ContactDetails>
                <ContactTitle $palette={palette}>Telefone</ContactTitle>
                <ContactValue $palette={palette}>
                  {LetsTalkData.phone}
                </ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <ContactIcon $palette={palette}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                </svg>
              </ContactIcon>
              <ContactDetails>
                <ContactTitle $palette={palette}>Localização</ContactTitle>
                <ContactValue $palette={palette}>
                  {LetsTalkData.local}
                </ContactValue>
              </ContactDetails>
            </ContactItem>
          </ContactInfo>
        </LeftSection>

        <RightSection>
          <FormContainer $palette={palette}>
            <FormTitle $palette={palette}>Envie uma Mensagem</FormTitle>

            <FormGrid>
              <FormGroup>
                <Label $palette={palette}>Nome *</Label>
                <Input
                  $palette={palette}
                  placeholder="Seu nome completo"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label $palette={palette}>Email *</Label>
                <Input
                  $palette={palette}
                  type="email"
                  placeholder="seu@email.com"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </FormGrid>

            <FormGroup>
              <Label $palette={palette}>Assunto *</Label>
              <Input
                $palette={palette}
                placeholder="Assunto da mensagem"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label $palette={palette}>Mensagem *</Label>
              <TextArea
                $palette={palette}
                placeholder="Conte-me sobre seu projeto ou oportunidade..."
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </FormGroup>

            <div style={{ marginTop: "1.5rem" }}>
              <ButtonCard
                text={isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                icon={<FaPaperPlane />}
                palette={palette}
                className="form-submit"
                onClick={handleSubmit}
              />
            </div>
          </FormContainer>
        </RightSection>
      </ContentContainer>
    </LetsTalkContainer>
  );
};

export default LetsTalk;
