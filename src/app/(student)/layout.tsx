import type { ReactNode } from "react";
import { PortalShell } from "@/components/layout/portal-shell";

const studentItems = [
  { label: "Study Materials", href: "/study-materials" },
  { label: "Profile", href: "/profile" },
  { label: "Fees", href: "/fees" },
  { label: "Change Password", href: "/student/change-password" },
];

export default function StudentLayout({ children }: { children: ReactNode }) {
  return (
    <PortalShell title="Student Portal" items={studentItems} kind="student">
      {children}
    </PortalShell>
  );
}
