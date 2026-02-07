import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoanApp } from "@/types/loan";

interface LoanCardProps {
  data: LoanApp;
}

export function LoanCard({ data }: LoanCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Loan Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div><strong>Amount:</strong> ${data.loan.loanAmount.toLocaleString()}</div>
        <div><strong>Purpose:</strong> {data.loan.loanPurpose}</div>
      </CardContent>
    </Card>
  );
}