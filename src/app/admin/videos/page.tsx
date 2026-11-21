import { AdminModule } from "@/components/admin/admin-module";
export default function VideosManagementPage() {
  return (
    <AdminModule
      title="Videos"
      description="Manage the subject playlists shown on the public video page."
      emptyTitle="No playlists yet"
      emptyDescription="YouTube playlist management and validation will appear here after video management is connected."
    />
  );
}
