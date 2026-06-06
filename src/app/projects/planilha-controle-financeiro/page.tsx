import type { Metadata } from "next";
import { ProjectCaseLayout } from "@/components/projects/ProjectCaseLayout";
import { planilhaControleFinanceiroCase } from "@/data/projectCases";

export const metadata: Metadata = {
  title: "Planilha de Controle Financeiro - Excel/VBA",
  description:
    "Estudo de caso de planilha de controle financeiro em Excel com dashboard, automações em VBA e aplicação prática para usuários finais.",
};

export default function PlanilhaControleFinanceiroPage() {
  return <ProjectCaseLayout project={planilhaControleFinanceiroCase} />;
}