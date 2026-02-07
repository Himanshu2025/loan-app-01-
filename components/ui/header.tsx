import { StatusBadge } from "@/components/loan/status-badge";
import { LoanApp } from "@/types/loan";

interface LoanHeaderProps {
  data: LoanApp;
}

export default function LoanHeader({ data }: LoanHeaderProps) {
  return (
    <div className="pt-12 pb-8 mb-12"> 
      <div className="flex justify-between items-start mb-4">
        {/* Title*/}
        <h1 className="text-3xl font-bold text-foreground">Loan Application</h1>
        
        {/* Status */}
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <span>Status:</span>
          <StatusBadge status={data.status} />
        </div>
      </div>
      
      {/* ID */}
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <span>ID</span>
        <div className="font-mono bg-muted px-3 py-1 rounded-md">
          {data.id}
        </div>
      </div>
    </div>
  );
}