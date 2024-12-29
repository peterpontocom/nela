import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { TabBar } from "@/components/mobile/tab-bar/tab-bar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Outlet />
      </main>
      <TabBar />
    </SidebarProvider>
  );
}
