import { contactLinks } from "@/data/contactLinks";

const metrics = [
  {
    label: "Receita analisada",
    value: "R$ 48,2k",
    variation: "+18%",
  },
  {
    label: "Economia mapeada",
    value: "R$ 7,4k",
    variation: "+12%",
  },
  {
    label: "Pedidos avaliados",
    value: "1.248",
    variation: "+32%",
  },
];

const bars = [
  { label: "Jan", height: "h-16" },
  { label: "Fev", height: "h-24" },
  { label: "Mar", height: "h-20" },
  { label: "Abr", height: "h-32" },
  { label: "Mai", height: "h-28" },
  { label: "Jun", height: "h-36" },
];

function DashboardMockup() {
  return (
    <div className="relative">
      <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-blue-100 blur-2xl" />
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-emerald-100 blur-2xl" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              Dashboard Preview
            </p>
            <h3 className="mt-1 text-lg font-bold text-slate-950">
              Análise Financeira
            </h3>
          </div>

          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            BI
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
            >
              <p className="text-xs text-slate-500">{metric.label}</p>
              <strong className="mt-2 block text-lg font-bold text-slate-950">
                {metric.value}
              </strong>
              <span className="mt-1 block text-xs font-semibold text-emerald-600">
                {metric.variation}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-800">
              Evolução mensal
            </p>
            <span className="text-xs text-slate-500">Últimos 6 meses</span>
          </div>

          <div className="flex h-40 items-end gap-3">
            {bars.map((bar) => (
              <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className={`w-full rounded-t-xl bg-blue-600 ${bar.height}`}
                />
                <span className="text-xs text-slate-500">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-slate-100 p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Projeto em destaque
              </p>
              <h4 className="mt-1 font-bold text-slate-950">
                Dashboard Financeiro em Excel
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Indicadores, filtros dinâmicos e visão executiva para tomada de
                decisão.
              </p>
            </div>

            <div className="hidden rounded-2xl bg-slate-950 px-3 py-2 text-xs font-semibold text-white sm:block">
              Excel
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              Power BI
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              SQL
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              Excel
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              Python
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Portfólio de Dados, BI e Analytics
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Transformo dados em dashboards, análises e decisões mais claras.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Sou Felipe Mendes, profissional em transição para Dados e BI, com
            projetos práticos em Excel, SQL, Power BI, Python e construção de
            dashboards para análise de indicadores.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Ver projetos
            </a>

            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white"
            >
              Ver GitHub
            </a>

            <a
              href={contactLinks.resume}
              download
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white"
            >
              Baixar currículo
            </a>

            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
            <div>
              <strong className="block text-xl text-slate-950">4+</strong>
              Projetos práticos
            </div>

            <div>
              <strong className="block text-xl text-slate-950">5</strong>
              Ferramentas de dados
            </div>

            <div>
              <strong className="block text-xl text-slate-950">100%</strong>
              Foco em BI e Analytics
            </div>
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}