
"use client";

import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/loan/status-badge"; 
import { Loader2 } from "lucide-react";
import { useStatusUpdate } from "@/hooks/UseStatusUpdate";
import { LoanApp } from "@/types/loan";

interface StatusButtonsProps {
  status: LoanApp["status"];
  onStatusChange: (newStatus: LoanApp["status"]) => void;
}

export function StatusButtons({ status, onStatusChange }: StatusButtonsProps) {
  const { loading, availableActions, updateStatus } = useStatusUpdate(status, onStatusChange);

  // If final state, just show badge
  if (["approved", "rejected"].includes(status)) {
    return (
      <div className="p-4 bg-muted/20 rounded-md border max-w-sm">
        <StatusBadge status={status} />
      </div>
    );
  }

  // Helper for friendly labels
  const labelFor = (action: string) => {
    if (action === "under-review") return "Move to Under Review";
    if (action === "approved") return "Approve";
    if (action === "rejected") return "Reject";
    return action;
  };

  return (
    <div className="p-4 bg-card border rounded-md shadow-sm max-w-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Current Status:</span>
          <StatusBadge status={status} />
        </div>

        <div className="flex items-center gap-3">
          {availableActions.map((action) => (
            <Button
              key={action}
              variant={action === "rejected" ? "destructive" : "default"}
              size="sm"
              onClick={() => updateStatus(action)}
              disabled={loading}
              className="h-10 px-4 py-2 text-sm font-medium"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : labelFor(action)}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}