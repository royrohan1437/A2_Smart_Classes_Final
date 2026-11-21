import { AdminModule } from "@/components/admin/admin-module";
export default function GalleryManagementPage() {
  return (
    <AdminModule
      title="Gallery"
      description="Manage approved photographs and their captions for the public gallery."
      emptyTitle="No gallery images yet"
      emptyDescription="Image upload and caption controls will be available after gallery management and storage are connected."
    />
  );
}
