import type { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    title: "Dashboard Comercial - Power BI",
    slug: "dashboard-comercial",
    description:
      "Dashboard para acompanhamento de faturamento, ticket médio, categorias, vendas por período e desempenho comercial.",
    tools: ["Power BI", "Power Query", "DAX"],
    githubUrl: "https://github.com/Felipee-M",
    demoUrl: "",
    image: "/images/projects/dashboard-comercial.png",
    status: "published",
    featured: true,
  },
  {
    title: "Análise de E-commerce - SQL",
    slug: "ecommerce-sql",
    description:
      "Análise de pedidos, clientes, sellers, produtos, faturamento, entrega e cancelamentos usando SQL.",
    tools: ["SQL", "PostgreSQL", "DBeaver"],
    githubUrl: "https://github.com/Felipee-M",
    demoUrl: "",
    image: "/images/projects/ecommerce-sql.png",
    status: "coming-soon",
    featured: true,
  },
  {
    title: "Dashboard Financeiro - Excel",
    slug: "dashboard-financeiro",
    description:
      "Dashboard financeiro com indicadores, categorias, controle de despesas, visão mensal e análise de economia.",
    tools: ["Excel", "VBA", "Dashboard"],
    githubUrl: "https://github.com/Felipee-M",
    demoUrl: "",
    image: "/images/projects/dashboard-financeiro.png",
    status: "coming-soon",
    featured: true,
  },
  {
    title: "Análise Exploratória - Python/Pandas",
    slug: "analise-python-pandas",
    description:
      "Análise exploratória de dados usando Python, Pandas e visualizações para identificar padrões e insights.",
    tools: ["Python", "Pandas", "Jupyter"],
    githubUrl: "https://github.com/Felipee-M",
    demoUrl: "",
    image: "/images/projects/analise-python-pandas.png",
    status: "coming-soon",
    featured: false,
  },
];