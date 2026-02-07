"use client";
import { useState, useEffect } from "react";
import { getLoanApp } from "@/lib/mock-db";
import { LoanApp } from "@/types/loan";
import { ApplicantCard } from "@/components/loan/applicant-card";
import { LoanCard } from "@/components/loan/loan-card";
import LoanHeader from "@/components/ui/header";
import { StatusButtons } from "@/components/loan/status-buttons";

interface PageProps {
  params: { id: string };
}

export default function LoanAppPage({ params }: PageProps) {
  const { id } = params;
  const [loanData, setLoanData] = useState<LoanApp | null>(null);

  useEffect(() => {
    getLoanApp(id).then(setLoanData);
  }, [id]);

  if (!loanData) return <div className="p-8 text-center">Loading...</div>;

  const handleStatusChange = (newStatus: LoanApp["status"]) => {
    setLoanData((prev) => (prev ? { ...prev, status: newStatus } : prev));
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 space-y-12 max-w-6xl mx-auto">
      <LoanHeader data={loanData} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ApplicantCard data={loanData} />
        <LoanCard data={loanData} />
      </div>
      <StatusButtons status={loanData.status} onStatusChange={handleStatusChange} />
    </div>
  );
}