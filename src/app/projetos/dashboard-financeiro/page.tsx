import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const projectImages = [
  {
    src: "/images/projects/dashboard-financeiro-overview.png",
    alt: "Visão geral do dashboard financeiro em Excel",
    title: "Visão geral do dashboard",
  },
  {
    src: "/images/projects/dashboard-financeiro-indicadores-mar.png",
    alt: "Indicadores financeiros de Março do dashboard em Excel",
    title: "Indicadores financeiros",
  },
  {
    src: "/images/projects/dashboard-financeiro-indicadores-abr.png",
    alt: "Indicadores financeiros de Janeiro do dashboard em Excel",
    title: "Indicadores financeiros",
  },
];

export const metadata: Metadata = {
  title: "Dashboard Financeiro - Excel",
  description:
    "Estudo de caso de dashboard financeiro em Excel com KPIs, filtros dinâmicos, controle de despesas e automações em VBA.",
};

export default function DashboardFinanceiroPage() {
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
          Dashboard Financeiro - Excel
        </h1>

        <p className="mb-10 max-w-3xl text-lg leading-8 text-slate-300">
          Projeto desenvolvido para acompanhamento financeiro pessoal, com foco
          em entradas, saídas, saldo, economia mensal, categorias de despesas e
          visualização clara dos principais indicadores.
        </p>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Contexto</h2>

          <p className="leading-8 text-slate-300">
            Muitos controles financeiros são feitos de forma manual, espalhada
            ou pouco visual. Isso dificulta a leitura rápida da situação
            financeira e torna mais difícil acompanhar gastos, receitas,
            economia e evolução mensal.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Problema resolvido</h2>

          <p className="leading-8 text-slate-300">
            O principal problema era transformar lançamentos financeiros em uma
            visão organizada e intuitiva, permitindo identificar rapidamente
            quanto entrou, quanto saiu, qual foi o saldo, quanto foi economizado
            e quais categorias mais impactaram o orçamento.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Solução desenvolvida</h2>

          <p className="leading-8 text-slate-300">
            Foi criado um dashboard em Excel com indicadores financeiros,
            filtros dinâmicos, segmentação por período, categorização de
            despesas e automações em VBA para facilitar a atualização e o uso da
            planilha no dia a dia.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Ferramentas usadas</h2>

          <div className="flex flex-wrap gap-3">
            {["Excel", "VBA", "Tabelas Dinâmicas", "Dashboard", "KPIs"].map(
              (tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
                >
                  {tool}
                </span>
              ),
            )}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Principais indicadores</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Indicador</p>
              <h3 className="mt-2 text-xl font-semibold">Saldo atual</h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Indicador</p>
              <h3 className="mt-2 text-xl font-semibold">Entradas e saídas</h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Indicador</p>
              <h3 className="mt-2 text-xl font-semibold">Economia mensal</h3>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Processo</h2>

          <ol className="list-decimal space-y-3 pl-6 leading-8 text-slate-300">
            <li>Organização da base de lançamentos financeiros.</li>
            <li>Classificação de receitas e despesas por categoria.</li>
            <li>Criação dos principais KPIs financeiros.</li>
            <li>Construção de visualizações e filtros dinâmicos.</li>
            <li>Implementação de automações em VBA para facilitar o uso.</li>
            <li>Organização final do dashboard para leitura rápida dos dados.</li>
          </ol>
        </section>

        <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Imagens do projeto</h2>

            <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                <Image
                    src={projectImages[0].src}
                    alt={projectImages[0].alt}
                    width={1200}
                    height={675}
                    className="h-auto w-full object-cover"
                />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                {projectImages.slice(1).map((image) => (
                    <figure
                    key={image.src}
                    className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
                    >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={900}
                        height={506}
                        className="h-auto w-full object-cover"
                    />

                    <figcaption className="px-4 py-3 text-sm text-slate-400">
                        {image.title}
                    </figcaption>
                    </figure>
                ))}
                </div>
            </div>
        </section>

        <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Vídeo demonstrativo</h2>

            <p className="mb-6 leading-8 text-slate-300">
                Demonstração prática do funcionamento da solução, incluindo navegação,
                indicadores e principais recursos do projeto.
            </p>

            <div className="overflow-hidden rounded-2xl border border-slate-800">
                <div className="aspect-video w-full">
                <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/cl6BwChjj24"
                    title="Vídeo demonstrativo do projeto"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                </div>
            </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Impacto</h2>

          <ul className="list-disc space-y-3 pl-6 leading-8 text-slate-300">
            <li>Facilita a leitura da saúde financeira em poucos segundos.</li>
            <li>Ajuda a identificar categorias com maior peso nos gastos.</li>
            <li>Melhora o acompanhamento da economia mensal.</li>
            <li>Transforma registros financeiros em indicadores úteis para decisão.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">Links</h2>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://github.com/Felipee-M/data-analytics-portfolio"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-blue-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-600"
            >
              Ver no GitHub
            </a>

            <Link
              href="/#projetos"
              className="rounded-lg border border-slate-700 px-6 py-3 text-center font-semibold text-slate-100 transition hover:border-slate-500"
            >
              Voltar aos projetos
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}