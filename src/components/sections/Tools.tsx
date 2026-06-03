import { tools } from "@/data/tools";

export function Tools() {
  return (
    <section id="ferramentas" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold">Ferramentas</h2>

      <div className="flex flex-wrap gap-3">
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}