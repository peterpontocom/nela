import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function UserAccount() {
  return (
    <>
      <h1 className="text-xl font-semibold">Sua conta</h1>
      <div>
        <Avatar className="size-16 cursor-pointer">
          <AvatarImage src="https://github.com/peterpontocom.png" />
          <AvatarFallback>PP</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">Seu avatar</span>
      </div>
      <form>
        <Label htmlFor="name">Nome</Label>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Peter Pontocom"
            id="name"
            value={"Peter Pontocom"}
          />
          <Button type="submit" variant={"secondary"}>
            Editar
          </Button>
        </div>
      </form>
      <form>
        <Label htmlFor="username">Nome de usuário</Label>
        <div className="flex gap-2">
          <div className="flex flex-1 items-center gap-2">
            <Button
              variant={"outline"}
              size={"xs"}
              className="text-xs text-muted-foreground"
            >
              @
            </Button>{" "}
            <Input
              type="text"
              placeholder="peterpontocom"
              id="username"
              value={"peterpontocom"}
            />
          </div>
          <Button type="submit" variant={"secondary"}>
            Editar
          </Button>
        </div>
      </form>
    </>
  );
}
