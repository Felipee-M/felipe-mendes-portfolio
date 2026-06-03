import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://felipe-mendes-portfolio.vercel.app"),
  title: {
    default: "Felipe Mendes | Dados, BI e Analytics",
    template: "%s | Felipe Mendes",
  },
  description:
    "Portfólio profissional de Felipe Mendes com projetos de Dados, Business Intelligence, Power BI, SQL, Excel e Python.",
  keywords: [
    "Felipe Mendes",
    "Analista de Dados",
    "Business Intelligence",
    "Power BI",
    "SQL",
    "Excel",
    "Python",
    "Portfólio de Dados",
  ],
  authors: [{ name: "Felipe Mendes" }],
  creator: "Felipe Mendes",
  openGraph: {
    title: "Felipe Mendes | Dados, BI e Analytics",
    description:
      "Portfólio profissional com projetos de Dados, BI, Power BI, SQL, Excel e Python.",
    url: "/",
    siteName: "Felipe Mendes Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
