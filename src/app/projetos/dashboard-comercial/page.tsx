import Link from "next/link";

export default function DashboardComercialPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-bold">
            Felipe Mendes
          </Link>

          <Link href="/#projetos" className="text-sm text-slate-300 hover:text-white">
            Voltar para projetos
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Estudo de caso
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
          Dashboard Comercial - Power BI
        </h1>

        <p className="mb-10 max-w-3xl text-lg leading-8 text-slate-300">
          Projeto desenvolvido para acompanhar indicadores comerciais como
          faturamento, ticket médio, vendas por categoria, evolução temporal e
          desempenho geral do negócio.
        </p>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Contexto</h2>
          <p className="leading-8 text-slate-300">
            Empresas precisam acompanhar seus resultados comerciais de forma
            visual e objetiva. Este dashboard foi pensado para centralizar as
            principais métricas e facilitar a leitura dos dados por gestores,
            equipes comerciais e áreas administrativas.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Problema resolvido</h2>
          <p className="leading-8 text-slate-300">
            O problema principal era transformar dados brutos de vendas em uma
            visão clara sobre desempenho, permitindo identificar períodos de
            maior faturamento, categorias mais relevantes e indicadores que
            apoiam a tomada de decisão.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Ferramentas usadas</h2>

          <div className="flex flex-wrap gap-3">
            {["Power BI", "Power Query", "DAX", "Excel"].map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Processo</h2>

          <ol className="list-decimal space-y-3 pl-6 leading-8 text-slate-300">
            <li>Importação da base de dados.</li>
            <li>Tratamento e padronização das colunas no Power Query.</li>
            <li>Criação de medidas para indicadores principais.</li>
            <li>Construção dos visuais e organização do layout.</li>
            <li>Análise dos principais resultados encontrados.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Principais indicadores</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Indicador</p>
              <h3 className="mt-2 text-xl font-semibold">Faturamento</h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Indicador</p>
              <h3 className="mt-2 text-xl font-semibold">Ticket médio</h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Indicador</p>
              <h3 className="mt-2 text-xl font-semibold">Vendas por categoria</h3>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Prints do dashboard</h2>

          <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-10 text-center text-slate-400">
            Adicionar imagem do dashboard em breve.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Insights</h2>

          <ul className="list-disc space-y-3 pl-6 leading-8 text-slate-300">
            <li>Identificação das categorias com maior participação nas vendas.</li>
            <li>Acompanhamento da evolução do faturamento ao longo do tempo.</li>
            <li>Visualização rápida dos principais indicadores comerciais.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">Links</h2>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://github.com/SEU-USUARIO"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-blue-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-600"
            >
              Ver no GitHub
            </a>

            <a
              href="#"
              className="rounded-lg border border-slate-700 px-6 py-3 text-center font-semibold text-slate-100 transition hover:border-slate-500"
            >
              Ver demonstração
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}