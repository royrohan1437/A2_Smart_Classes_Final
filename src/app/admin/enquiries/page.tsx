import { AdminModule } from "@/components/admin/admin-module";
export default function EnquiriesPage() {
  return (
    <AdminModule
      title="Enquiries"
      description="Review admission enquiries and follow up with prospective students."
      emptyTitle="No enquiries yet"
      emptyDescription="New enquiries will appear here after the enquiry form is connected. Enquiries will be retained and managed without deletion."
    />
  );
}
