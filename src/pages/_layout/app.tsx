import { Header } from "@/components/mobile/header";
import { TabBar } from "@/components/mobile/tab-bar/tab-bar";
import { AppSidebarLeft } from "@/components/sidebar/app-sidebar-left";
import { AppSidebarRight } from "@/components/sidebar/app-sidebar-right";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebarLeft />
      <main className="w-full p-4 md:p-6 lg:p-8">
        <Header />
        <Outlet />
      </main>
      <AppSidebarRight />
      <TabBar />
      <Toaster richColors />
    </SidebarProvider>
  );
}
