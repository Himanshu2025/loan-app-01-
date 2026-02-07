import { getLoanApp } from "@/lib/mock-db";
import { LoanApp } from "@/types/loan";

interface Pageprops {
  params: Promise<{id: string}>
}

export default async function LoanAppPage({params}:{ params: { id: string }}) {
    const { id } = await params; 
    const loanApp: LoanApp = await getLoanApp(id); 


    return (
        <div>
        {/* Test: Raw data dump */}
        <div>
          {JSON.stringify(loanApp, null, 2)}
        </div>
      </div>
      
    )
    
}