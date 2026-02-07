import { getLoanApp } from "@/lib/mock-db";
import { LoanApp } from "@/types/loan";
import { Badge } from "@/components/ui/badge";
import { ApplicantCard } from "@/components/loan/applicant-card";
import { LoanCard } from "@/components/loan/loan-card";

export default async function LoanAppPage({params}:{ params: { id: string }}) {
    const { id } = await params; 
    const loanApp: LoanApp = await getLoanApp(id); 

    return (
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-left space-y-4 mb-12 space-x-4">
            <h1 className="text-4xl font-bold text-foreground">
              Loan Application
            </h1>
            <div className="flex flex-wrap gap-3 justify-center items-center">

            
            <div className="flex flex-wrap gap-3 justify-center items-center">
              ID: 
            </div>
                <Badge variant="secondary" className="text-lg font-mono">
                  {loanApp.id}
                </Badge>
                <Badge variant="default">{loanApp.status.toUpperCase()}</Badge>
                </div>
          </div>


          {/* Grid columns layout for diplaying the loan and applicat details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ApplicantCard data={loanApp} />
            <LoanCard data={loanApp} />
          </div>
        </div>

      
    )
    
}