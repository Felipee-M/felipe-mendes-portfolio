import type { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    title: "Dashboard Financeiro - Excel",
    slug: "dashboard-financeiro",
    category: "Excel • Dashboard • VBA",
    description:
      "Dashboard financeiro para acompanhamento de entradas, saídas, saldo, economia e evolução mensal.",
    problem:
      "Controles financeiros manuais dificultam a visualização rápida da saúde financeira e o acompanhamento de resultados mensais.",
    solution:
      "Criação de um dashboard em Excel com KPIs, filtros dinâmicos, categorização de despesas e automações em VBA.",
    impact:
      "Facilita o acompanhamento financeiro, melhora a leitura dos dados e apoia decisões sobre gastos, economia e planejamento.",
    tools: ["Excel", "VBA", "Dashboard", "Tabelas Dinâmicas"],
    githubUrl: "https://github.com/Felipee-M/data-analytics-portfolio",
    demoUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=cl6BwChjj24",
    image: "/images/projects/dashboard-financeiro.png",
    status: "published",
    featured: true,
  },
  {
  title: "Planilha de Controle Financeiro - Excel/VBA",
  slug: "planilha-controle-financeiro",
  category: "Excel • VBA • Produto Digital",
  description:
    "Solução de controle financeiro em Excel com automações em VBA, desenvolvida como produto digital publicado na Hotmart.",
  problem:
    "Muitas pessoas têm dificuldade em organizar receitas, despesas, contas fixas e acompanhamento financeiro mensal de forma simples e visual.",
  solution:
    "Criação de uma planilha automatizada em Excel com lançamento de receitas e despesas, categorização, indicadores financeiros e recursos em VBA para melhorar a usabilidade.",
  impact:
    "Transforma o controle financeiro pessoal em uma ferramenta prática, visual e automatizada, demonstrando aplicação real de Excel/VBA em uma solução comercial.",
  tools: ["Excel", "VBA", "Dashboard", "Automação"],
  githubUrl: "",
  demoUrl: "controlefinanceirofacil.hotmart.host",
  videoUrl: "https://www.youtube.com/watch?v=aOCYkTo7WKY",
  image: "/images/projects/planilha-controle-financeiro.png",
  status: "published",
  featured: true,
  },
  {
    title: "Análise de E-commerce - SQL",
    slug: "ecommerce-sql",
    category: "SQL • PostgreSQL • Analytics",
    description:
      "Análise de pedidos, clientes, vendedores, produtos, faturamento, entrega e cancelamentos usando SQL.",
    problem:
      "Bases de e-commerce possuem várias tabelas relacionadas e exigem consultas bem estruturadas para gerar indicadores confiáveis.",
    solution:
      "Construção de consultas SQL para analisar faturamento, ticket médio, categorias, vendedores, clientes, entregas e avaliações.",
    impact:
      "Permite identificar desempenho comercial, comportamento de clientes, categorias relevantes e pontos de atenção operacional.",
    tools: ["SQL", "PostgreSQL", "DBeaver", "CTEs", "Window Functions"],
    githubUrl: "https://github.com/Felipee-M/data-analytics-lab",
    demoUrl: "",
    videoUrl: "",
    image: "/images/projects/ecommerce-sql.png",
    status: "published",
    featured: true,
  },
  {
    title: "Dashboard Comercial - Power BI",
    slug: "dashboard-comercial",
    category: "Power BI • Business Intelligence",
    description:
      "Dashboard para acompanhamento de faturamento, ticket médio, categorias, vendas por período e desempenho comercial.",
    problem:
      "Gestores precisam acompanhar indicadores comerciais de forma clara, visual e rápida para tomar decisões melhores.",
    solution:
      "Criação de um dashboard em Power BI com indicadores comerciais, filtros, análise temporal e visão por categoria.",
    impact:
      "Centraliza os principais indicadores de vendas e facilita a leitura do desempenho comercial.",
    tools: ["Power BI", "Power Query", "DAX"],
    githubUrl: "https://github.com/Felipee-M",
    demoUrl: "",
    videoUrl: "",
    image: "/images/projects/dashboard-comercial.png",
    status: "in-progress",
    featured: true,
  },
  {
    title: "Análise Exploratória - Python/Pandas",
    slug: "analise-python-pandas",
    category: "Python • Pandas • EDA",
    description:
      "Análise exploratória de dados usando Python, Pandas e visualizações para identificar padrões e insights.",
    problem:
      "Bases de dados precisam ser exploradas, limpas e resumidas antes de gerar conclusões confiáveis.",
    solution:
      "Uso de Python e Pandas para limpeza, análise exploratória, criação de métricas e visualizações iniciais.",
    impact:
      "Ajuda a entender padrões, inconsistências e oportunidades antes da criação de relatórios ou dashboards.",
    tools: ["Python", "Pandas", "Jupyter", "Matplotlib"],
    githubUrl: "https://github.com/Felipee-M/data-analytics-lab",
    demoUrl: "",
    videoUrl: "",
    image: "/images/projects/analise-python-pandas.png",
    status: "coming-soon",
    featured: false,
  },
];