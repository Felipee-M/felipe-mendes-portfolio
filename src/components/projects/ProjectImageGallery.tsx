"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ProjectCase } from "@/data/projectCases";

type ProjectImage = ProjectCase["images"][number];

type ProjectImageGalleryProps = {
  images: ProjectCase["images"];
};

export function ProjectImageGallery({ images }: ProjectImageGalleryProps) {
  const [activeImage, setActiveImage] = useState<ProjectImage | null>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const [mainImage, ...secondaryImages] = images;

  if (!mainImage) {
    return null;
  }

  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-bold">Imagens do projeto</h2>

      <p className="mb-6 text-sm leading-6 text-slate-400">
        Clique nas imagens para ampliar e visualizar melhor os detalhes do
        projeto.
      </p>

      <div className="space-y-6">
        <ProjectImageFigure
          image={mainImage}
          width={1200}
          height={675}
          onOpen={() => setActiveImage(mainImage)}
        />

        {secondaryImages.length > 0 && (
          <div className="grid gap-4 md:grid-cols-2">
            {secondaryImages.map((image) => (
              <ProjectImageFigure
                key={image.src}
                image={image}
                width={900}
                height={506}
                onOpen={() => setActiveImage(image)}
              />
            ))}
          </div>
        )}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada: ${activeImage.title}`}
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
            >
              Fechar
            </button>

            <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
              <div className="relative h-[75vh] w-full">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="border-t border-slate-800 px-4 py-3 text-sm text-slate-300">
                {activeImage.title}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectImageFigure({
  image,
  width,
  height,
  onOpen,
}: {
  image: ProjectImage;
  width: number;
  height: number;
  onOpen: () => void;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <button
        type="button"
        onClick={onOpen}
        className="group block w-full cursor-zoom-in text-left"
        aria-label={`Ampliar imagem: ${image.title}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={width}
          height={height}
          className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.01]"
        />
      </button>

      <figcaption className="flex items-center justify-between gap-3 px-4 py-3 text-sm text-slate-400">
        <span>{image.title}</span>
        <span className="shrink-0 text-xs text-blue-400">
          Clique para ampliar
        </span>
      </figcaption>
    </figure>
  );
}