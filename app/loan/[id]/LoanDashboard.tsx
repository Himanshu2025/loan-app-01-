"use client"; 
import { useState } from "react";
import { LoanApp } from "@/types/loan";
import { ApplicantCard } from "@/components/loan/applicant-card";
import { LoanCard } from "@/components/loan/loan-card";
import LoanHeader from "@/components/ui/header";
import { StatusButtons } from "@/components/loan/status-buttons";


interface Props {
    initialData: LoanApp; 
}

export default function LoanDashboard({initialData}: Props){
  const [loanData, setLoanData] = useState(initialData);

  const handleStatusChange = (newStatus: LoanApp["status"]) => {
    setLoanData((prev) => ({ ...prev!, status: newStatus }));
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

}; 