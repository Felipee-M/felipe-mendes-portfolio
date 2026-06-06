const toolGroups = [
  {
    category: "Business Intelligence",
    tools: ["Power BI", "Dashboards", "Indicadores", "Visualização de Dados"],
  },
  {
    category: "Análise de Dados",
    tools: ["SQL", "PostgreSQL", "Python", "Pandas"],
  },
  {
    category: "Produtividade e Automação",
    tools: ["Excel", "Power Query", "VBA", "Google Sheets"],
  },
  {
    category: "Versionamento e Portfólio",
    tools: ["Git", "GitHub", "Next.js", "Vercel"],
  },
];

export function Tools() {
  return (
    <section id="ferramentas" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wide text-blue-400">
          Ferramentas
        </span>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Ferramentas e tecnologias
        </h2>

        <p className="mt-4 text-slate-300">
          Principais ferramentas que utilizo para análise, organização,
          visualização de dados e construção de projetos.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {toolGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <h3 className="mb-4 text-lg font-semibold text-white">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}