"use client"; 

import { LoanApp } from "@/types/loan";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

interface StatusHistoryCardProps {
    history: LoanApp["statusHistory"]; 
}

// status history card to display the status change logs
export function StatusHistoryCard({history}: StatusHistoryCardProps){
    
  if(!history || history.length === 0) return null;

  // splitting date and time to display the timestamp
  function formatTime(iso: string): string {
    const date = new Date(iso);
    const datePart = date.toLocaleDateString("en-AU");
    const timePart = date.toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit", hour12: false});
    
    return `${datePart} ${timePart}`;
}

    return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Status History</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2 text-sm">
        {/* Adding each status history entry one below the other with notes + timestamp */}
        {history.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-md border px-3 py-2 bg-card"
          >
            <div className="flex flex-col">
              <span className="font-medium capitalize">
                {entry.notes}
              </span>
            </div>

            <span className="text-xs font-light">
              {formatTime(entry.timestamp)}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
