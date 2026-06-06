import { contactLinks } from "@/data/contactLinks";

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="mb-4 text-3xl font-bold">Contato</h2>

        <p className="mb-6 max-w-2xl text-slate-300">
          Estou construindo meu portfólio em Dados, BI e Analytics e aberto a
          oportunidades júnior, projetos práticos e conversas profissionais.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={contactLinks.email}
            className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Enviar e-mail
          </a>

          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Falar no WhatsApp
          </a>

          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
          >
            Ver LinkedIn
          </a>

          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
          >
            Ver GitHub
          </a>

          <a
            href={contactLinks.resume}
            download
            className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
          >
            Baixar currículo
          </a>
        </div>
      </div>
    </section>
  );
}