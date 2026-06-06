export type Project = {
  id: string;
  title: string;
  category: string;
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
    description:
      "Dashboard interativo para análise de receitas, despesas, saldo, economia e evolução mensal.",
    tools: ["Excel", "Power Query", "Dashboard"],
    status: "Concluído",
    image: "/images/projects/dashboard-financeiro-overview.png",
    caseUrl: "/projects/dashboard-financeiro",
    githubUrl: "https://github.com/Felipee-M/data-analytics-portfolio",
    featured: true,
  },
  {
    id: "controle-financeiro-vba",
    title: "Planilha de Controle Financeiro",
    category: "Excel / VBA",
    description:
      "Sistema em Excel com automações, dashboard, controle de lançamentos e análise financeira.",
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
    description:
      "Dashboard para acompanhamento de vendas, indicadores comerciais e desempenho por categoria.",
    tools: ["Power BI", "DAX", "Power Query"],
    status: "Em desenvolvimento",
    image: "/images/projects/powerbi-comercial.png",
    caseUrl: "/projects/dashboard-comercial-powerbi",
    featured: false,
  },
];