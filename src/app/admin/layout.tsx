import type { ReactNode } from "react";
import { PortalShell } from "@/components/layout/portal-shell";

const adminItems = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Enquiries", href: "/admin/enquiries", indicator: false },
  { label: "Students", href: "/admin/students" },
  { label: "Teachers", href: "/admin/teachers" },
  { label: "Academics", href: "/admin/academics" },
  { label: "Materials", href: "/admin/materials" },
  { label: "Videos", href: "/admin/videos" },
  { label: "Gallery", href: "/admin/gallery" },
  { label: "Fees", href: "/admin/fees" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <PortalShell title="Super Admin" items={adminItems} kind="admin">
      {children}
    </PortalShell>
  );
}
