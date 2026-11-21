import { AdminModule } from "@/components/admin/admin-module";
export default function StudentsPage() {
  return (
    <AdminModule
      title="Students"
      description="Manage student records, academic placement, and account status."
      emptyTitle="No student records yet"
      emptyDescription="Student records and search filters will appear here after student management is connected."
    />
  );
}
