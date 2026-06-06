import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-slate-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-bold">
          Felipe Mendes
        </Link>

        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#sobre" className="hover:text-white">
            Sobre
          </a>
          <a href="#projetos" className="hover:text-white">
            Projetos
          </a>
          <a href="#ferramentas" className="hover:text-white">
            Ferramentas
          </a>
          <a href="#contato" className="hover:text-white">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}