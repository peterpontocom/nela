import { Home, CreditCard, Star, Store, Settings, Bell } from "lucide-react";

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
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Cartão",
    url: "/card",
    icon: CreditCard,
  },
  {
    title: "Favoritos",
    url: "/favorites",
    icon: Star,
  },
  {
    title: "Loja",
    url: "/store",
    icon: Store,
  },
  {
    title: "Configurações",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();
  function isCurrentUrl(url: string): boolean {
    return location.pathname === url;
  }
  return (
    <div>
      {/* Add a sidebar on the left side */}
      <Sidebar>
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
                {items.map((item) => (
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

      {/* Add a sidebar on the right side */}
      <Sidebar side="right">
        <SidebarHeader className="px-4 pb-4 pt-4">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="flex flex-1 items-center gap-2 rounded-lg bg-muted p-2">
              <Avatar className="size-8 rounded-full">
                <AvatarImage src="https://github.com/peterpontocom.png" />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="flex max-w-[130px] flex-col text-clip text-sm leading-tight">
                <span className="w-full truncate font-medium">
                  Peter Pontocom
                </span>
                <span className="max-w- truncate text-xs">
                  willpontocom07@gmail.com
                </span>
              </div>
            </div>
            <Button variant={"ghost"} size={"icon"}>
              <span className="sr-only">Notificações</span> <Bell />
            </Button>
          </div>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent></SidebarContent>
      </Sidebar>
    </div>
  );
}
