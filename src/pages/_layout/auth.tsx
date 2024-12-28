import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center p-8 lg:flex-row lg:p-0">
      <Outlet />
      <footer className="flex translate-y-20 flex-col items-center justify-center gap-3 p-4 md:hidden lg:hidden">
        <span className="text-xs font-light text-muted-foreground">From</span>
        <span className="font-title text-2xl font-bold text-primary">Nela</span>
      </footer>
    </div>
  );
}
