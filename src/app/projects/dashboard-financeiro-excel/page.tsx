import type { Metadata } from "next";
import { ProjectCaseLayout } from "@/components/projects/ProjectCaseLayout";
import { dashboardFinanceiroCase } from "@/data/projectCases";

export const metadata: Metadata = {
  title: "Dashboard Financeiro - Excel",
  description:
    "Estudo de caso de dashboard financeiro em Excel com KPIs, filtros dinâmicos e análise de indicadores financeiros.",
};

export default function DashboardFinanceiroPage() {
  return <ProjectCaseLayout project={dashboardFinanceiroCase} />;
}