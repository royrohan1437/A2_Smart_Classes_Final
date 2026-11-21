import { AdminModule } from "@/components/admin/admin-module";
export default function TeachersPage() {
  return (
    <AdminModule
      title="Teachers"
      description="Manage faculty profiles shown on the public website."
      emptyTitle="No faculty profiles yet"
      emptyDescription="Approved teacher profiles will appear here when faculty management is connected."
    />
  );
}
