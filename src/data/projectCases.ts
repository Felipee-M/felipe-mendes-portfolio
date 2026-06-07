export type ProjectCase = {
  title: string;
  label: string;
  description: string;
  summary: string;
  context: string;
  challenge: string;
  solution: string;
  tools: string[];
  indicators: string[];
  process: string[];
  images: {
    src: string;
    alt: string;
    title: string;
  }[];
  video?: {
    title: string;
    description: string;
    embedUrl: string;
  };
  impact: string[];
  links: {
    label: string;
    href: string;
    external?: boolean;
    variant?: "primary" | "secondary";
  }[];
};

export const dashboardFinanceiroCase: ProjectCase = {
  title: "Dashboard Financeiro - Excel",
  label: "Estudo de caso",
  description:
    "Projeto de estudo desenvolvido em Excel para análise financeira pessoal, com foco em indicadores, visualização de dados e acompanhamento de receitas, despesas, saldo e evolução mensal.",
  summary:
    "Dashboard financeiro criado como projeto prático de estudo para transformar lançamentos financeiros em indicadores visuais, facilitando a leitura de entradas, saídas, saldo, economia mensal e categorias de despesas.",
  context:
    "Durante a construção do portfólio em Dados e BI, o objetivo deste projeto foi aplicar conceitos de organização de dados, criação de indicadores e visualização em Excel, simulando uma necessidade comum de análise financeira pessoal.",
  challenge:
    "O principal desafio era transformar uma base de lançamentos financeiros em uma visão visual, organizada e fácil de interpretar, permitindo identificar rapidamente o comportamento das receitas, despesas e saldo ao longo do tempo.",
  solution:
    "Foi desenvolvido um dashboard em Excel com KPIs financeiros, análise por período, categorias de despesas e visualizações que facilitam a interpretação dos dados de forma rápida e objetiva.",
  tools: ["Excel", "Tabelas Dinâmicas", "Dashboard", "KPIs", "Visualização de Dados"],
  indicators: [
    "Saldo atual",
    "Entradas e saídas",
    "Economia mensal",
    "Categorias de despesas",
    "Evolução financeira",
  ],
  process: [
    "Organização da base de lançamentos financeiros.",
    "Classificação de receitas e despesas por categoria.",
    "Criação dos principais indicadores financeiros.",
    "Construção das visualizações no Excel.",
    "Organização do dashboard para leitura rápida dos dados.",
    "Documentação do projeto no GitHub para apresentação no portfólio.",
  ],
  images: [
    {
      src: "/images/projects/dashboard-financeiro-overview.png",
      alt: "Visão geral do dashboard financeiro em Excel",
      title: "Visão geral do dashboard",
    },
    {
      src: "/images/projects/dashboard-financeiro-indicadores-mar.png",
      alt: "Indicadores financeiros de Março do dashboard em Excel",
      title: "Indicadores financeiros - Março",
    },
    {
      src: "/images/projects/dashboard-financeiro-indicadores-abr.png",
      alt: "Indicadores financeiros de Abril do dashboard em Excel",
      title: "Indicadores financeiros - Abril",
    },
  ],
  video: {
    title: "Vídeo demonstrativo",
    description:
      "Demonstração prática do funcionamento do dashboard, incluindo navegação, indicadores e principais visualizações do projeto.",
    embedUrl: "https://www.youtube.com/embed/cl6BwChjj24",
  },
  impact: [
    "Aplicação prática de conceitos de análise financeira em Excel.",
    "Transformação de lançamentos financeiros em indicadores visuais.",
    "Facilidade na leitura de receitas, despesas, saldo e economia mensal.",
    "Projeto documentado no GitHub como parte do portfólio de Dados e BI.",
  ],
  links: [
    {
      label: "Ver no GitHub",
      href: "https://github.com/Felipee-M/data-analytics-portfolio",
      external: true,
      variant: "primary",
    },
    {
      label: "Voltar aos projetos",
      href: "/#projetos",
      variant: "secondary",
    },
  ],
};

export const planilhaControleFinanceiroCase: ProjectCase = {
  title: "Planilha de Controle Financeiro",
  label: "Estudo de caso",
  description:
    "Planilha desenvolvida em Excel com dashboard, automações em VBA e recursos práticos para controle financeiro pessoal, acompanhamento de lançamentos e análise de indicadores.",
  summary:
    "Solução em Excel criada para facilitar o controle financeiro pessoal, reunindo cadastro de lançamentos, dashboard visual, automações e indicadores para acompanhar receitas, despesas, saldo e economia mensal.",
  context:
    "Muitas pessoas controlam suas finanças em planilhas simples ou anotações manuais, o que dificulta a visualização da situação financeira real. A proposta deste projeto foi criar uma ferramenta mais organizada, visual e prática para uso no dia a dia.",
  challenge:
    "O desafio era desenvolver uma planilha funcional, fácil de usar e visualmente clara, que permitisse registrar movimentações financeiras, acompanhar indicadores importantes e reduzir tarefas manuais por meio de automações.",
  solution:
    "Foi desenvolvida uma planilha de controle financeiro em Excel com dashboard, indicadores principais, categorização de lançamentos, acompanhamento mensal e automações em VBA para melhorar a experiência de uso.",
  tools: ["Excel", "VBA", "Dashboard", "KPIs", "Automação"],
  indicators: [
    "Saldo atual",
    "Total de entradas",
    "Total de saídas",
    "Economia mensal",
    "Despesas por categoria",
    "Status de pagamentos",
  ],
  process: [
    "Definição da estrutura da planilha e das abas principais.",
    "Criação da base de lançamentos financeiros.",
    "Organização das categorias de receitas e despesas.",
    "Desenvolvimento dos indicadores e cards financeiros.",
    "Construção do dashboard visual.",
    "Criação de automações em VBA para facilitar ações recorrentes.",
    "Testes de usabilidade e ajustes na experiência do usuário.",
    "Preparação da solução para apresentação como produto digital.",
  ],
  images:[
    {
      src: "/images/projects/planilha-controle-financeiro.png",
      alt: "Visão geral da planilha de controle financeiro",
      title: "Visão geral da planilha",
    },
  ],
  video: {
    title: "Vídeo demonstrativo",
    description:
      "Demonstração prática do funcionamento do dashboard, incluindo navegação, indicadores e principais visualizações do projeto.",
    embedUrl: "https://www.youtube.com/embed/aOCYkTo7WKY",
  },
  impact: [
    "Facilita o controle financeiro pessoal em uma interface simples e visual.",
    "Reduz tarefas manuais por meio de automações em VBA.",
    "Ajuda o usuário a acompanhar receitas, despesas, saldo e economia mensal.",
    "Demonstra aplicação prática de Excel avançado, dashboards e automação.",
    "Projeto com potencial comercial, adaptado para apresentação como produto digital.",
  ],
  links: [
    {
      label: "Ver demonstração",
      href: "https://controlefinanceirofacil.hotmart.host",
      external: true,
      variant: "primary",
    },
    {
      label: "Voltar aos projetos",
      href: "/#projetos",
      variant: "secondary",
    },
  ],
};

export const ecommerceSqlCase: ProjectCase = {
  title: "Análise de E-commerce com SQL",
  label: "Estudo de caso",
  description:
    "Projeto de análise de dados de e-commerce utilizando SQL para explorar vendas, pedidos, clientes, categorias e indicadores comerciais.",
  summary:
    "Estudo prático com foco em consultas SQL para transformar dados brutos de e-commerce em métricas úteis para análise de desempenho comercial, comportamento de clientes e visão geral das vendas.",
  context:
    "Empresas de e-commerce geram grandes volumes de dados relacionados a pedidos, clientes, produtos, pagamentos e entregas. O objetivo deste projeto foi simular uma análise de negócio usando SQL para extrair informações relevantes desses dados.",
  challenge:
    "O desafio era organizar consultas capazes de responder perguntas importantes de negócio, como volume de pedidos, receita, desempenho por categoria, comportamento dos clientes e evolução das vendas.",
  solution:
    "Foram desenvolvidas consultas SQL para explorar a base de dados, realizar joins entre tabelas, criar agregações, calcular métricas comerciais e gerar análises que apoiam a interpretação dos resultados do e-commerce.",
  tools: ["SQL", "PostgreSQL", "DBeaver", "Joins", "Agregações"],
  indicators: [
    "Total de pedidos",
    "Receita analisada",
    "Ticket médio",
    "Pedidos por status",
    "Vendas por categoria",
    "Clientes por região",
  ],
  process: [
    "Exploração inicial da estrutura da base de dados.",
    "Identificação das principais tabelas do projeto.",
    "Criação de consultas com filtros e ordenações.",
    "Uso de joins para combinar informações de pedidos, clientes e produtos.",
    "Criação de agregações para gerar indicadores comerciais.",
    "Organização das queries para documentação no GitHub.",
    "Interpretação dos resultados com foco em perguntas de negócio.",
  ],
  images: [
    {
      src: "/images/projects/ecommerce-sql-readme.png",
      alt: "Documentação do sprint 4 do projeto de consultas no SQL",
      title: "Documentação do sprint 4",
    },
    {
      src: "/images/projects/ecommerce-sql-sprint4-1.png",
      alt: "Consultas realizadas para conclusão do sprint 4",
      title: "Consultas do sprint 4",
    },
    {
      src: "/images/projects/ecommerce-sql-sprint4-2.png",
      alt: "Consultas realizadas para conclusão do sprint 4",
      title: "Consultas do sprint 4",
    },
    {
      src: "/images/projects/ecommerce-sql-sprint4-34.png",
      alt: "Consultas realizadas para conclusão do sprint 4",
      title: "Consultas do sprint 4",
    },
  ],
  impact: [
    "Demonstra capacidade de extrair informações úteis a partir de dados relacionais.",
    "Aplica conceitos fundamentais de SQL para análise de negócio.",
    "Mostra domínio de joins, filtros, agrupamentos e métricas comerciais.",
    "Fortalece o portfólio com um projeto diretamente relacionado a Dados e BI.",
    "Serve como base para evoluir futuramente para dashboards em Power BI.",
  ],
  links: [
    {
      label: "Ver no GitHub",
      href: "https://github.com/Felipee-M/data-analytics-lab",
      external: true,
      variant: "primary",
    },
    {
      label: "Voltar aos projetos",
      href: "/#projetos",
      variant: "secondary",
    },
  ],
};