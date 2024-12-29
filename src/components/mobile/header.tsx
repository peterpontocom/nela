import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex w-full flex-1 items-center justify-between border-b border-muted p-4 md:hidden lg:hidden">
      <h1 className="font-brand text-3xl font-bold text-primary">Nela</h1>
      <div className="flex items-center gap-4">
        <Avatar className="size-8 rounded-full">
          <AvatarImage src="https://github.com/peterpontocom.png" />
          <AvatarFallback className="rounded-lg">CN</AvatarFallback>
        </Avatar>
        <Link to="/notifications">
          <span className="sr-only">Notificações</span>{" "}
          <Bell className="size-6" />
        </Link>
      </div>
    </header>
  );
}
