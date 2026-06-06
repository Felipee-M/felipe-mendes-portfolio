import type { Metadata } from "next";
import { ProjectCaseLayout } from "@/components/projects/ProjectCaseLayout";
import { ecommerceSqlCase } from "@/data/projectCases";

export const metadata: Metadata = {
  title: "Análise de E-commerce com SQL",
  description:
    "Estudo de caso de análise de e-commerce com SQL, PostgreSQL, joins, agregações e indicadores comerciais.",
};

export default function EcommerceSqlPage() {
  return <ProjectCaseLayout project={ecommerceSqlCase} />;
}