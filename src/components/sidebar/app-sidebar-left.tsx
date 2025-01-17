import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { NavItems } from "@/routes";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Menu items.

export function AppSidebarLeft() {
  const location = useLocation();
  function isCurrentUrl(url: string): boolean {
    return location.pathname === url;
  }
  return (
    <div>
      {/* Add a sidebar on the left side */}
      <Sidebar className="hidden md:block lg:block">
        <SidebarHeader className="p-4">
          <Link to="/home">
            <h1 className="font-brand text-3xl font-bold">Nela</h1>
          </Link>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {NavItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.url}
                        className={
                          isCurrentUrl(item.url)
                            ? "font-bold text-primary hover:text-primary"
                            : ""
                        }
                      >
                        <item.icon
                          className={
                            isCurrentUrl(item.url) ? "fill-current" : ""
                          }
                        />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
