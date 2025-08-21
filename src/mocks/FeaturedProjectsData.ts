import { AiFillHeart } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import { TbCircleDottedLetterM } from "react-icons/tb";

export const data = [
  {
    id: btoa(new Date().getTime().toString()),
    mainIcon: AiFillHeart,
    url: "https://github.com/MLS467/TCC-Projeto_React.git",
    title: "AtendeBem Front-End",
    description:
      "O AtendeBem é um sistema de prontuário eletrônico e gestão de atendimentos hospitalares, desenvolvido como meu Trabalho de Conclusão de Curso (TCC). Ele integra fluxos de triagem, atendimento e acompanhamento de pacientes, proporcionando eficiência e organização para profissionais da saúde.",
    tech: ["React JS", "Styled Components"],
  },
  {
    id: btoa((new Date().getTime() + 1).toString()),
    mainIcon: FaServer,
    url: "https://github.com/MLS467/TCC-Projeto_PHP-Laravel.git",
    title: "AtendeBem Back-End",
    description:
      "API do sistema AtendeBem, desenvolvida em Laravel com MySQL como banco de dados. Este back-end garante a persistência e integridade dos dados do prontuário eletrônico, além de fornecer rotas seguras para o fluxo de triagem, cadastro de pacientes e gestão de atendimentos hospitalares. Foram aplicados testes automatizados com PHPUnit para assegurar a qualidade e confiabilidade do sistema.",
    tech: ["Laravel", "MySQL", "PHPUnit"],
  },
  {
    id: btoa((new Date().getTime() + 2).toString()),
    mainIcon: TbCircleDottedLetterM,
    url: "https://github.com/MLS467/devmaisson.git",
    title: "Meu Portfólio Pessoal",
    description:
      "Aplicação web desenvolvida para apresentar meus projetos, habilidades e experiências. O front-end foi construído com React e TypeScript, focando em performance, acessibilidade e design responsivo. A API em Laravel gerencia dados dinâmicos como lista de projetos e formulários de contato. Este portfólio reflete minha identidade profissional e capacidade técnica como desenvolvedor full stack.",
    tech: ["React", "TypeScript", "Laravel"],
  },
];
