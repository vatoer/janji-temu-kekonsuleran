import {
  Archive,
  Calendar,
  CheckCircle,
  Edit,
  Edit3,
  Megaphone,
  Search,
  XCircle,
} from "lucide-react";

export const StatusIcon = ({ status }: { status?: string }) => {
  switch (status) {
    case "DRAFT":
      return <Edit />;
    case "IN_REVIEW":
      return <Search />;
    case "NEEDS_REVISIONS":
      return <Edit3 />;
    case "APPROVED":
      return <CheckCircle />;
    case "SCHEDULED":
      return <Calendar />;
    case "PUBLISHED":
      return <Megaphone />;
    case "ARCHIVED":
      return <Archive />;
    case "REJECTED":
      return <XCircle />;
    default:
      return null;
  }
};
