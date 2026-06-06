import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planilha de Controle Financeiro - Excel/VBA",
  description:
    "Estudo de caso de uma planilha de controle financeiro em Excel com automações em VBA, criada como produto digital publicado na Hotmart.",
};

const projectImages = [
  {
    src: "/images/projects/planilha-controle-financeiro.png",
    alt: "Visão geral da planilha de controle financeiro em Excel",
    title: "Visão geral da solução",
  }
];

export default function PlanilhaControleFinanceiroPage() {
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
          Estudo de caso • Produto digital
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
          Planilha de Controle Financeiro - Excel/VBA
        </h1>

        <p className="mb-10 max-w-3xl text-lg leading-8 text-slate-300">
          Solução de controle financeiro desenvolvida em Excel com automações em
          VBA, criada para facilitar o registro de receitas, despesas, contas
          fixas, acompanhamento mensal e análise visual da vida financeira.
        </p>

        <div className="mb-12 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Projeto comercial
          </p>

          <p className="leading-8 text-slate-300">
            Além do desenvolvimento técnico, este projeto foi estruturado como
            produto digital publicado na Hotmart, demonstrando aplicação prática
            de Excel, VBA, automação, organização de dados e visão de negócio.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Contexto</h2>

          <p className="leading-8 text-slate-300">
            Muitas pessoas tentam controlar suas finanças usando anotações
            soltas, aplicativos pouco personalizados ou planilhas sem
            automação. Isso dificulta a visão clara de receitas, despesas,
            saldo, contas fixas e evolução mensal.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Problema resolvido</h2>

          <p className="leading-8 text-slate-300">
            O problema principal era criar uma ferramenta simples, visual e
            automatizada para centralizar o controle financeiro pessoal, reduzir
            tarefas manuais e facilitar a leitura dos principais indicadores de
            organização financeira.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Solução desenvolvida</h2>

          <p className="leading-8 text-slate-300">
            Foi criada uma planilha em Excel com estrutura de lançamentos,
            categorização de receitas e despesas, acompanhamento de contas,
            indicadores financeiros, painel visual e automações em VBA para
            melhorar a experiência de uso.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Ferramentas usadas</h2>

          <div className="flex flex-wrap gap-3">
            {["Excel", "VBA", "Dashboard", "Automação", "Produto Digital"].map(
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
          <h2 className="mb-4 text-2xl font-bold">Funcionalidades principais</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Funcionalidade</p>
              <h3 className="mt-2 text-xl font-semibold">Controle de receitas</h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Funcionalidade</p>
              <h3 className="mt-2 text-xl font-semibold">Controle de despesas</h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Funcionalidade</p>
              <h3 className="mt-2 text-xl font-semibold">Dashboard financeiro</h3>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Automações em VBA</h2>

          <ul className="list-disc space-y-3 pl-6 leading-8 text-slate-300">
            <li>Automação de rotinas para facilitar o uso da planilha.</li>
            <li>Melhoria da navegação e da experiência do usuário.</li>
            <li>Redução de ações repetitivas no controle financeiro.</li>
            <li>Organização de fluxos para atualização e consulta dos dados.</li>
          </ul>
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
          <h2 className="mb-4 text-2xl font-bold">Impacto</h2>

          <ul className="list-disc space-y-3 pl-6 leading-8 text-slate-300">
            <li>Transforma controle financeiro manual em uma solução visual e organizada.</li>
            <li>Demonstra aplicação prática de Excel avançado e VBA em um produto real.</li>
            <li>Mostra capacidade de criar soluções com foco em usabilidade e valor para o usuário.</li>
            <li>Conecta habilidade técnica com visão de negócio e publicação comercial.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">Links</h2>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://controlefinanceirofacil.hotmart.host"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-blue-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-600"
            >
              Ver página do produto
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