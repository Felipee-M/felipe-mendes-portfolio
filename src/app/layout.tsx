import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Felipe Mendes | Dados, BI e Analytics",
  description:
    "Portfólio profissional com projetos de Dados, BI, Power BI, SQL, Excel, Python e dashboards.",
  openGraph: {
    title: "Felipe Mendes | Dados, BI e Analytics",
    description:
      "Portfólio profissional com projetos de Dados, BI, Power BI, SQL, Excel, Python e dashboards.",
    url: "https://felipe-mendes-portfolio.vercel.app",
    siteName: "Felipe Mendes Portfolio",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Felipe Mendes | Portfólio de Dados, BI e Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Mendes | Dados, BI e Analytics",
    description:
      "Projetos de Dados, BI, Power BI, SQL, Excel, Python e dashboards.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}