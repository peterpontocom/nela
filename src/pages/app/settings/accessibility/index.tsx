import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "./mode-toggle";

export function Accessibility() {
  return (
    <>
      <h1 className="text-xl font-semibold">Acessibilidade</h1>
      <div className="flex items-center justify-between gap-2">
        <h1>Tema</h1>
        <ModeToggle />
      </div>
      <Separator orientation="horizontal" />
    </>
  );
}
