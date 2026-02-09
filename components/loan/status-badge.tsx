import { Badge } from "@/components/ui/badge";

// Custom colors for different status options 
const colors = {
  pending: "bg-yellow-500 text-white",
  approved: "bg-green-500 text-white", 
  rejected: "bg-red-500 text-white",
  default: "bg-gray-500 text-white"
};

interface Props {
  status: string;
}

export function StatusBadge({ status }: Props) {
  return (
    <Badge className={colors[status.toLowerCase() as keyof typeof colors] || colors.default}>
      {status.toUpperCase()}
    </Badge>
  );
}
