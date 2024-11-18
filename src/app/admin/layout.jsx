import { AdminPageTitleWrapper, AdminSidebar,  } from "@/components";
export default function AdminLayout({ children }) {
  return (
    <div className="flex  items-start">
      {/* sidebar */}

      <div className="h-screen flex  items-start justify-between gap-0 overflow-y-auto">
        <AdminSidebar />
      </div>
      {/* content */}
      <div className="bg-admin-bg w-full h-screen flex flex-col p-4 overflow-y-auto">
        {/* title and search */}
        <AdminPageTitleWrapper/>
        {children}
      </div>
    </div>
  );
}
