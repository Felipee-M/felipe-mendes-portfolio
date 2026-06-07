export type Project = {
  id: string;
  title: string;
  category: string;
  impactShort: string;
  description: string;
  tools: string[];
  status: "Concluído" | "Em desenvolvimento" | "Planejado";
  image: string;
  caseUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "dashboard-financeiro-excel",
    title: "Dashboard Financeiro em Excel",
    category: "Excel / BI",
    impactShort: "Transforma uma planilha financeira em uma solução prática com dashboard e automações.",
    description:
      "Dashboard desenvolvido como estudo prático para análise de receitas, despesas, saldo e evolução mensal.",
    tools: ["Excel", "Dashboard", "KPIs"],
    status: "Concluído",
    image: "/images/projects/dashboard-financeiro-overview.png",
    caseUrl: "/projects/dashboard-financeiro-excel",
    githubUrl: "https://github.com/Felipee-M/data-analytics-portfolio",
    featured: true,
  },
  {
    id: "planilha-controle-financeiro",
    title: "Planilha de Controle Financeiro",
    category: "Excel / VBA",
    impactShort: "Organiza receitas, despesas e saldo em uma visão financeira clara.",
    description:
      "Planilha em Excel com dashboard, automações e indicadores para controle financeiro pessoal.",
    tools: ["Excel", "VBA", "Dashboard"],
    status: "Concluído",
    image: "/images/projects/planilha-controle-financeiro.png",
    caseUrl: "/projects/planilha-controle-financeiro",
    demoUrl: "https://controlefinanceirofacil.hotmart.host",
    featured: true,
  },
  {
    id: "ecommerce-sql",
    title: "Análise de E-commerce com SQL",
    category: "SQL / Analytics",
    impactShort: "Consulta dados relacionais para responder perguntas comerciais sobre vendas e clientes.",
    description:
      "Análise exploratória de vendas, clientes, pedidos e desempenho comercial usando SQL.",
    tools: ["SQL", "PostgreSQL", "DBeaver"],
    status: "Concluído",
    image: "/images/projects/ecommerce-sql-readme.png",
    caseUrl: "/projects/ecommerce-sql",
    githubUrl: "https://github.com/Felipee-M/data-analytics-lab",
    featured: true,
  },
  {
    id: "dashboard-comercial-powerbi",
    title: "Dashboard Comercial em Power BI",
    category: "Power BI / BI",
    impactShort: "Em breve.",
    description:
      "Dashboard para acompanhamento de vendas, indicadores comerciais e desempenho por categoria.",
    tools: ["Power BI", "DAX", "Power Query"],
    status: "Em desenvolvimento",
    image: "/images/projects/powerbi-comercial.png",
    caseUrl: "/projects/dashboard-comercial-powerbi",
    featured: false,
  },
];