"use client"; 
import { useState } from "react";
import { toast } from "sonner";
import { LoanApp } from "@/types/loan";

/**
 * Loan officer status update fucntion with edge cases
 * Handles workflow + errors.
 */

export function useStatusUpdate(status: LoanApp["status"], onStatusChange?: (newStatus: LoanApp["status"]) => void) {
  const [loading, setLoading] = useState(false);

  // Workflow rules (DRY)
  const nextActions: Record<LoanApp["status"], LoanApp["status"][]> = {
    pending: ["under-review"],
    "under-review": ["approved", "rejected"],
    approved: [],
    rejected: [],
  };

  // all edge cases 
  const updateStatus = async (newStatus: LoanApp["status"]) => {
    // Case 1: No self change 
    if (newStatus === status) return false;

    // Case 2: Workflow validation
    const allowed = nextActions[status as keyof typeof nextActions];
    if (!allowed?.includes(newStatus)) {
      toast.error("Invalid transition");
      return false;
    }

    // Case 3: ResponsiveUI + loading

    setLoading(true);
    if (onStatusChange) onStatusChange(newStatus);

    try {
      // Mock API (real: fetch)
      await new Promise(r => setTimeout(r, 300));

      toast.success("Status updated successfully");
      return true;
    } catch {
      // Case 4: Using try,catch and Revert + error
      toast.error("Update failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Case 5: no change after application is approved or rejected
  const availableActions = nextActions[status as keyof typeof nextActions] || [];

  return {
    status,
    loading,
    availableActions,
    updateStatus,
  };
}
