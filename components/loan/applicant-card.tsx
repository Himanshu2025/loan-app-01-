import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoanApp } from "@/types/loan";

interface ApplicantCardProps {
  data: LoanApp;
}

// Applicant card to display the applicant details 
export function ApplicantCard({ data }: ApplicantCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Applicant Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div> <strong> Name: </strong>  {data.applicant.applicantName} </div>
        <div> <strong> Annual Income: </strong> ${data.applicant.annualIncome.toLocaleString()} </div>
        <div> <strong> Employment: </strong> {data.applicant.employmentStatus} </div>
        <div> <strong> Credit Score: </strong> {data.applicant.creditScore} </div>
        <div> <strong> Applied: </strong> {data.applicant.applicationDate} </div>
      </CardContent>
    </Card>
  );
}
