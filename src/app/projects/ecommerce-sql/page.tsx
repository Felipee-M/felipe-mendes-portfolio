import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const projectImages = [
  {
    src: "/images/projects/ecommerce-sql-readme-sprint3.png",
    alt: "Documentação do sprint 3 da análise de e-commerce no GitHub",
    title: "Documentação do sprint 3 do projeto",
  },
   {
    src: "/images/projects/ecommerce-sql-readme.png",
    alt: "Documentação do sprint 4 da análise de e-commerce no GitHub",
    title: "Documentação do sprint 4 do projeto",
  },
];

export const metadata: Metadata = {
  title: "Análise de E-commerce - SQL",
  description:
    "Estudo de caso de análise de e-commerce com SQL, PostgreSQL, joins, métricas comerciais, entregas, cancelamentos e avaliações.",
};

export default function EcommerceSqlPage() {
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
          Análise de E-commerce - SQL
        </h1>

        <p className="mb-10 max-w-3xl text-lg leading-8 text-slate-300">
          Projeto desenvolvido para analisar dados de e-commerce usando SQL e
          PostgreSQL, com foco em faturamento, pedidos, vendedores, categorias,
          entregas, cancelamentos, avaliações e comportamento comercial.
        </p>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Contexto</h2>

          <p className="leading-8 text-slate-300">
            Bases de e-commerce normalmente possuem várias tabelas relacionadas,
            como pedidos, clientes, vendedores, produtos, pagamentos, entregas e
            avaliações. Para gerar informações confiáveis, é necessário
            compreender os relacionamentos entre as tabelas e construir consultas
            bem estruturadas.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Problema resolvido</h2>

          <p className="leading-8 text-slate-300">
            O principal desafio era transformar uma base relacional com múltiplas
            tabelas em indicadores de negócio capazes de responder perguntas
            sobre desempenho comercial, operação logística, cancelamentos,
            categorias de produtos e satisfação dos clientes.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Solução desenvolvida</h2>

          <p className="leading-8 text-slate-300">
            Foram criadas consultas SQL no PostgreSQL para cruzar tabelas,
            validar relacionamentos, calcular métricas e gerar análises sobre
            vendas, faturamento, ticket médio, vendedores, categorias, entregas,
            pedidos cancelados, atrasos e avaliações.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Ferramentas usadas</h2>

          <div className="flex flex-wrap gap-3">
            {["SQL", "PostgreSQL", "DBeaver", "Joins", "CTEs", "Analytics"].map(
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
          <h2 className="mb-4 text-2xl font-bold">Principais análises</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Métrica</p>
              <h3 className="mt-2 text-xl font-semibold">Faturamento total</h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Métrica</p>
              <h3 className="mt-2 text-xl font-semibold">Ticket médio</h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Métrica</p>
              <h3 className="mt-2 text-xl font-semibold">Entregas e atrasos</h3>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Perguntas de negócio respondidas</h2>

          <ul className="list-disc space-y-3 pl-6 leading-8 text-slate-300">
            <li>Qual foi o faturamento total do período analisado?</li>
            <li>Qual foi o ticket médio dos pedidos?</li>
            <li>Quais categorias geraram maior faturamento?</li>
            <li>Quais vendedores tiveram melhor desempenho?</li>
            <li>Qual foi o tempo médio de entrega?</li>
            <li>Quantos pedidos foram cancelados?</li>
            <li>Quais pedidos tiveram atraso na entrega?</li>
            <li>Qual foi a média das avaliações dos clientes?</li>
            <li>Como as vendas se distribuíram por estado?</li>
            <li>Como as vendas evoluíram mês a mês?</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Processo</h2>

          <ol className="list-decimal space-y-3 pl-6 leading-8 text-slate-300">
            <li>Importação e organização dos dados no PostgreSQL.</li>
            <li>Exploração inicial das tabelas e seus relacionamentos.</li>
            <li>Validação de chaves e cruzamentos entre pedidos, produtos, clientes e vendedores.</li>
            <li>Criação de consultas com joins para consolidar informações.</li>
            <li>Cálculo de métricas comerciais e operacionais.</li>
            <li>Documentação das análises no repositório GitHub.</li>
          </ol>
        </section>

        <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Documentação do projeto</h2>

            <p className="mb-6 leading-8 text-slate-300">
                O projeto foi documentado por sprints no GitHub, demonstrando a evolução da
                análise SQL, desde a organização da base relacional até a construção de
                consultas para responder perguntas de negócio.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
                {projectImages.map((image) => (
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
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Impacto</h2>

          <ul className="list-disc space-y-3 pl-6 leading-8 text-slate-300">
            <li>Transforma dados relacionais em indicadores claros de negócio.</li>
            <li>Demonstra domínio de consultas SQL aplicadas a problemas reais.</li>
            <li>Ajuda a identificar desempenho comercial por categoria, vendedor e região.</li>
            <li>Permite avaliar pontos operacionais como atrasos, cancelamentos e avaliações.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">Links</h2>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://github.com/Felipee-M/data-analytics-lab"
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