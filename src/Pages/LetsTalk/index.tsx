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
import useForm from "../../Hooks/useForm";

const LetsTalk = () => {
  const { formData, handleInputChange, handleSubmit, isSubmitting } = useForm();
  const { palette } = useTheme();

  const handleButtonClick = () => {
    const form = document.querySelector(".contact-form") as HTMLFormElement;
    if (form) {
      form.requestSubmit();
    }
  };

  return (
    <LetsTalkContainer $palette={palette}>
      <span id="contact"></span>
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

            <form className="contact-form" onSubmit={handleSubmit}>
              <FormGrid>
                <FormGroup>
                  <Label $palette={palette}>Nome *</Label>
                  <Input
                    $palette={palette}
                    placeholder="Seu nome completo"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
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
                    required
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
                  required
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
                  required
                />
              </FormGroup>

              <div style={{ marginTop: "1.5rem" }}>
                <ButtonCard
                  text={isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  icon={<FaPaperPlane />}
                  palette={palette}
                  className="form-submit"
                  onClick={handleButtonClick}
                />
              </div>
            </form>
          </FormContainer>
        </RightSection>
      </ContentContainer>
    </LetsTalkContainer>
  );
};

export default LetsTalk;
