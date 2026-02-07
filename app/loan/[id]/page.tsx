import { getLoanApp } from "@/lib/mock-db";
import { LoanApp } from "@/types/loan";
import { ApplicantCard } from "@/components/loan/applicant-card";
import { LoanCard } from "@/components/loan/loan-card";
import LoanHeader from "@/components/ui/header";

export default async function LoanAppPage({params}:{ params: { id: string }}) {
    const { id } = await params; 
    const loanApp: LoanApp = await getLoanApp(id); 

    return (
        <div className="max-w-4xl mx-auto mb-12">
          <LoanHeader data={loanApp} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <ApplicantCard data={loanApp} />
            <LoanCard data={loanApp} />
          </div>
        </div>
    )
}