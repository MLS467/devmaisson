# Portfolio Profissional - Maisson

Um portfólio moderno e responsivo desenvolvido com React, TypeScript e Styled Components, apresentando informações profissionais, habilidades técnicas, projetos destacados e linha do tempo de experiências.

## 🚀 Demonstração

[Link para visualização do portfólio](https://devmaisson.netlify.app) (substitua pelo seu link de deploy)

## 📋 Funcionalidades

- ✅ **Design responsivo** - Adaptável para desktop, tablet e mobile
- ✅ **Tema claro/escuro** - Alternância entre temas com persistência
- ✅ **Animações suaves** - Transições e efeitos visuais
- ✅ **Seções organizadas**:
  - Página inicial com informações pessoais
  - Sobre mim com cards informativos
  - Habilidades técnicas categorizadas
  - Projetos destacados
  - Timeline de experiências
  - Material complementar (CV)
  - Contato e links sociais

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 19.1.1** - Biblioteca para construção da interface
- **TypeScript 5.8.3** - Tipagem estática
- **Styled Components 6.1.19** - Estilização CSS-in-JS
- **Vite 7.1.2** - Build tool e desenvolvimento

### Bibliotecas Auxiliares

- **React Icons 5.5.0** - Ícones
- **Lucide React 0.539.0** - Ícones adicionais
- **Typed.js 2.1.0** - Efeito de digitação
- **React Router DOM 7.8.1** - Roteamento (se aplicável)

### Desenvolvimento

- **ESLint** - Linting de código
- **TypeScript ESLint** - Rules específicas para TS

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── AboutComponents/     # Componentes da seção About
│   ├── ButtonDefault/       # Botão padrão
│   ├── FeaturedProjectsComponents/  # Projetos destacados
│   ├── HeaderPagesDefault/  # Cabeçalho das páginas
│   ├── HomeComponents/      # Componentes da home
│   ├── SupplementaryMaterialComponent/  # Material complementar
│   ├── TecHabilities/       # Habilidades técnicas
│   └── TimeLineComponents/  # Componentes da timeline
├── constants/            # Constantes (cores, temas)
├── context/             # Contextos React (Theme)
├── Hooks/               # Hooks customizados
├── mocks/               # Dados mockados
├── Pages/               # Páginas principais
├── style/               # Estilos globais
└── assets/              # Recursos estáticos
```

## 🔧 Instalação e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**

```bash
git clone https://github.com/MLS467/devmaisson.git
cd devmaisson
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento**

```bash
npm run dev
```

4. **Acesse no navegador**

```
http://localhost:5173
```

## 📱 Responsividade

O projeto é totalmente responsivo, com breakpoints otimizados para:

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Mobile pequeno**: < 480px

### Principais adaptações mobile:

- Menu de navegação adaptativo
- Cards reorganizados em coluna única
- Tipografia redimensionada
- Espaçamentos otimizados
- Timeline simplificada para mobile

## 🎨 Sistema de Temas

O portfólio possui sistema de alternância entre tema claro e escuro:

### Tema Claro

- Background: `#fcfcfc`
- Texto principal: `#2a313c`
- Texto secundário: `rgba(140, 143, 146, 0.8)`

### Tema Escuro

- Background: `#0f0f10`
- Texto principal: `#f5f5f5`
- Texto secundário: `rgba(200, 200, 200, 0.8)`

### Cores de destaque

- Azul: `#2e8dfa`
- Verde: `#57db8e`

## 🚀 Build e Deploy

### Build para produção

```bash
npm run build
```

### Preview do build

```bash
npm run preview
```

### Deploy

O projeto pode ser facilmente deployado em plataformas como:

- **Netlify**
- **Vercel**
- **GitHub Pages**
- **Firebase Hosting**

## 📂 Personalização

### Adicionando novos projetos

Edite o arquivo `src/mocks/FeaturedProjectsData.ts`:

```typescript
export const featuredProjectsData = [
  {
    mainIcon: SeuIcone,
    title: "Nome do Projeto",
    url: "https://github.com/seu-usuario/projeto",
    description: "Descrição do projeto...",
    technologies: ["React", "TypeScript", "etc"],
  },
];
```

### Modificando informações pessoais

Edite `src/mocks/DescriptionPageData.ts`:

```typescript
export const data = {
  name: "Seu Nome",
  developer: "Sua Profissão",
  description: "Sua descrição...",
};
```

### Adicionando tecnologias

Edite `src/mocks/TechnologiesData.ts` e adicione novas tecnologias às categorias existentes.

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build
- `npm run lint` - Executa o linter

## 📞 Contato

- **Email**: [maisson.ifsul@gmail.com](mailto:maisson.ifsul@gmail.com)
- **LinkedIn**: [Maisson Leal da Silva](https://www.linkedin.com/in/maisson-leal-da-silva-373633288)
- **GitHub**: [MLS467](https://github.com/MLS467)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ por [Maisson Leal da Silva](https://github.com/MLS467)**
