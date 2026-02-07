"use client";

import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/loan/status-badge";
import { Loader2 } from "lucide-react";
import { useStatusUpdate } from "@/hooks/UseStatusUpdate";
import { LoanApp } from "@/types/loan";

/**
 * Props for `StatusButtons`.
 * - `status`: the current loan application status (single source of truth is parent).
 * - `onStatusChange`: callback invoked when a new status is confirmed by the hook.
 */
interface StatusButtonsProps {
  status: LoanApp["status"];
  onStatusChange: (newStatus: LoanApp["status"]) => void;
}


/**
 * `StatusButtons` — client component that renders the current status and
 * available actions.
 *
 * Implementation notes:
 * - Uses `useStatusUpdate` hook for transition validation, loading state,
 *   and performing the async update. The hook receives the current `status`
 *   and an optional `onStatusChange` callback so the parent can update
 *   its local state (lifting state up).
 * - Final statuses (`approved`, `rejected`) render a single badge — no actions.
 * - Non-final statuses render available actions as buttons with friendly labels.
 */
export function StatusButtons({ status, onStatusChange }: StatusButtonsProps) {
  // Hook encapsulates update logic, validation and provides available actions
  const { loading, availableActions, updateStatus } = useStatusUpdate(status, onStatusChange);

  // --- Final state: show only the status badge (no actions allowed) ---
  if (["approved", "rejected"].includes(status)) {
    return (
      <div className="p-4 bg-muted/20 rounded-md border max-w-sm">
        <StatusBadge status={status} />
      </div>
    );
  }

  // Map internal status keys to friendly button labels.
  // Keeping this mapping small makes the UI text easy to change / localize.
  const labelFor = (action: string) => {
    if (action === "under-review") return "Move to Under Review";
    if (action === "approved") return "Accept";
    if (action === "rejected") return "Reject";
    return action;
  };

  // --- Main UI: left shows current status, right shows action buttons ---
  return (
    <div className="p-4 bg-card border rounded-md shadow-sm max-w-2xl">
      <div className="flex items-center justify-between">
        {/* Current status display */}
        <div className="flex items-center gap-3">
          <span className="text-sm">Current Status:</span>
          <StatusBadge status={status} />
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          {availableActions.map((action) => (
            <Button
              key={action}
              // destructive styling for reject action only
              variant={action === "rejected" ? "destructive" : "default"}
              size="sm"
              onClick={() => updateStatus(action)}
              disabled={loading}
              className="h-10 px-4 py-2 text-sm font-medium"
            >
              {/* show a spinner while update is in progress */}
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : labelFor(action)}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}