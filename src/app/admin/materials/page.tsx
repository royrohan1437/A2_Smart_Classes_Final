import { AdminModule } from "@/components/admin/admin-module";
export default function MaterialsManagementPage() {
  return (
    <AdminModule
      title="Materials"
      description="Organize study files by academic level, subject, chapter, and category."
      emptyTitle="No study materials yet"
      emptyDescription="Upload, access settings, and file replacement controls will be available when the materials and storage services are connected."
    />
  );
}
