import { AdminModule } from "@/components/admin/admin-module";
export default function FeesManagementPage() {
  return (
    <AdminModule
      title="Fees"
      description="Review fee schedules and payment records by academic year."
      emptyTitle="No fee records yet"
      emptyDescription="Fee filters, monthly schedules, and payment history will appear here after fee management is connected."
    />
  );
}
