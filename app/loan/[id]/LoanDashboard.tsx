"use client"; 
import { useState } from "react";
import { LoanApp } from "@/types/loan";
import { ApplicantCard } from "@/components/loan/applicant-card";
import { LoanCard } from "@/components/loan/loan-card";
import LoanHeader from "@/components/ui/header";
import { StatusButtons } from "@/components/loan/status-buttons";
import { StatusHistoryCard } from "@/components/loan/status-history-card";


interface Props {
    initialData: LoanApp; 
}

// LoanDashboard function which contains all the components 
export default function LoanDashboard({initialData}: Props){
  const [loanData, setLoanData] = useState<LoanApp>(initialData);

  // updating notes in the status-history-card
    const getNotesForStatus = (status: LoanApp["status"]): string => {
          switch (status) {
          case "pending": 
            return "Application submitted"
          case "under-review":
            return "Application under review";
          case "approved":
            return "Application approved";
          case "rejected":
            return "Application rejected";
          default:
            return "Status updated";
        }
    }

    //updating status in the header and history 
  const handleStatusChange = (newStatus: LoanApp["status"]) => {
    const timestamp = new Date().toISOString();
    const notes = getNotesForStatus(newStatus);

    setLoanData(prev => ({
      ...prev!,
      status: newStatus,
      statusHistory: [
        ...(prev?.statusHistory ?? []),
        { status: newStatus, timestamp, notes },
      ],
    }));
  };

    return (
    <div className="min-h-screen py-12 px-4 md:px-8 space-y-12 max-w-6xl mx-auto">
      <LoanHeader data={loanData} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ApplicantCard data={loanData} />
        <LoanCard data={loanData} />
      </div>
      <StatusButtons status={loanData.status} onStatusChange={handleStatusChange} />
      <StatusHistoryCard history={loanData.statusHistory ?? []} />
    </div>
    )

}; 