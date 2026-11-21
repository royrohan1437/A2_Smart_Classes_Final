import { AdminModule } from "@/components/admin/admin-module";
export default function AcademicsManagementPage() {
  return (
    <AdminModule
      title="Academics"
      description="Organize boards, classes, subjects, chapters, and academic sessions."
      emptyTitle="Academic structure is empty"
      emptyDescription="The academic hierarchy and ordering tools will appear here after academic management is connected."
    />
  );
}
