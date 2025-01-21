import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Outlet } from "react-router-dom";

export function Profile() {
  return (
    <>
      <header>
        <div className="h-44 w-full overflow-hidden rounded-md bg-zinc-700">
          <img
            src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="-mt-7 ml-4 flex w-max flex-col justify-center gap-2 text-center">
          <Avatar className="size-16">
            <AvatarImage src="https://github.com/peterpontocom.png" />
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>
          <span className="font-bold">Nela</span>
        </div>
        <p className="mt-4 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          aspernatur! Itaque culpa illo expedita aperiam cum quam fugit
          perspiciatis ipsam explicabo tenetur soluta eligendi harum, odio ullam
          quibusdam voluptatum beatae.
        </p>
        <div className="mt-3 flex flex-col gap-1 text-xs text-muted-foreground">
          <span>Contacto: (+244) 975 488 943</span>
          <span>Email: nela@gmail.com</span>
        </div>
      </header>
      <main className="mt-4">
        <h1 className="py-4 font-semibold text-primary">Produtos</h1>
        <Outlet />
      </main>
    </>
  );
}
