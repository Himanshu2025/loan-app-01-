import { getLoanApp } from "@/lib/mock-db";
import LoanDashboard from "./LoanDashboard";

interface PageProps {
  params: Promise<{id: string}>;
}

export default async function LoanAppPage({ params }: PageProps) {
  const { id } = await params;
  const loanData = await getLoanApp(id); 

  if(!loanData){
    return <div className="p-8 text-center">Loan not found</div>;
  }

  return <LoanDashboard initialData={loanData}/>;

}