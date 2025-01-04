import { Bell } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export function AppSidebarRight() {
  return (
    <div>
      {/* Add a sidebar on the right side */}
      <Sidebar side="right" className="hidden md:block lg:block">
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
