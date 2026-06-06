const services = [
  {
    title: "Dashboards",
    description:
      "Construção de painéis para acompanhamento de indicadores, resultados e desempenho.",
  },
  {
    title: "Relatórios",
    description:
      "Organização de informações em relatórios claros para apoiar decisões operacionais e estratégicas.",
  },
  {
    title: "Análises",
    description:
      "Exploração de dados para encontrar padrões, oportunidades, gargalos e insights relevantes.",
  },
];

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold">O que eu entrego</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
            <p className="text-slate-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}