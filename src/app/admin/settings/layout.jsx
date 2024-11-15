import { SettingsSidebar } from "@/components";

export default function SettingsLayout({ children }) {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
      {/* settings sidebar */}
     <SettingsSidebar/>

      {/* settings form */}
      {children}
    </div>
  );
}
