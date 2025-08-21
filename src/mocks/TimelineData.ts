import type { ReactNode } from "react";

export interface TimelineItem {
  id: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  dates: string;
  local: string;
}

export const timelineData: Omit<TimelineItem, "icon">[] = [
  {
    id: btoa(new Date().getTime().toString()),
    title: "Monitor de Estrutura de Dados",
    subtitle: "IFSUL – Campus Pelotas",
    description:
      "Auxílio a estudantes no estudo de listas, pilhas, filas, árvores, grafos e uso de ponteiros. Atuei reforçando conceitos teóricos e práticos, o que aprimorou meu próprio aprendizado. A experiência desenvolveu minha comunicação, empatia e habilidades de relacionamento interpessoal, além de fortalecer meu perfil como futuro desenvolvedor.",
    dates: "Jul 2024 - Jun 2025",
    local: "Pelotas, RS",
  },
  {
    id: btoa(new Date().getTime().toString()),
    title: "Projeto de Extensão – Implantação de AVA (Moodle)",
    subtitle: "IFSUL – Campus Pelotas",
    description:
      "Atuação em grupo junto à Escola Bilíngue Alfredo Dub para auxiliar professores e alunos surdos no uso do Moodle. Participação em reuniões, criação de manuais acessíveis e condução de aulas práticas para orientar a utilização da plataforma. A experiência proporcionou aprendizado sobre acessibilidade digital, inclusão tecnológica e UX/UI, além de fortalecer minhas habilidades de trabalho em equipe e meu compromisso em contribuir para a sociedade.",
    dates: "2024 - 2025",
    local: "Pelotas, RS",
  },
  {
    id: btoa(new Date().getTime().toString()),
    title: "Tecnologia em Sistemas para Internet",
    subtitle: "IFSUL – Campus Pelotas",
    description:
      "Graduação em andamento com conclusão prevista para 2026. Curso avaliado com nota máxima (5) pelo MEC. Durante a formação, adquiri conhecimentos em lógica de programação, algoritmos, modelagem de dados, bancos de dados, engenharia de software, desenvolvimento de sistemas web e mobile, IoT e redes. A experiência acadêmica tem fortalecido minhas habilidades técnicas e contribuído para meu crescimento pessoal e profissional.",
    dates: "2023 - 2026 (previsto)",
    local: "Pelotas, RS",
  },

  {
    id: btoa(new Date().getTime().toString()),
    title: "Soldado – Auxiliar Administrativo (Setor de Pagamento Pessoal)",
    subtitle: "Exército Brasileiro",
    description:
      "Atuei no setor de pagamento pessoal, auxiliando em atividades administrativas e organizacionais. A experiência fortaleceu meu senso de disciplina, responsabilidade, hierarquia e trabalho em equipe, além de aprimorar minhas habilidades de organização e atenção a detalhes.",
    dates: "2014 - 2015",
    local: "Pelotas, RS",
  },
];
