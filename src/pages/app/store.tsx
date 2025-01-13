import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Plus, StoreIcon, TriangleAlert } from "lucide-react";

export function Store() {
  return (
    <div className="mt-16 md:mt-0 lg:mt-0">
      {/*---------------------------------------Empty--------------------------------------------------------*/}
      <div className="m-auto mt-10 flex w-full flex-col items-center justify-center gap-8 md:w-[300px] lg:w-[300px]">
        <Card className="rounded-full bg-muted p-4 text-card-foreground">
          <StoreIcon className="size-10" />
        </Card>
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-lg font-bold text-muted-foreground">
            Não possui nenhuma loja
          </h1>
          <p className="text-muted-foreground">
            Crie sua primeira loja para gerenciar seus produtos e vendas de
            forma simples
          </p>
          <Dialog>
            <DialogTrigger>
              <Button className="mx-auto self-start">
                <span className="hidden md:inline lg:inline-block">
                  Criar loja
                </span>
                <Plus className="font-bold md:hidden lg:hidden" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="flex flex-col items-center gap-2 font-semibold md:flex-row lg:flex-row">
                <Card className="rounded-full bg-muted bg-rose-600 p-2 text-card-foreground">
                  <TriangleAlert />{" "}
                </Card>
                <h1>Está funcionalidade ainda não está disponível</h1>
              </DialogHeader>
              <DialogDescription className="text-center">
                A partir de Fevereiro você poderá criar e gerenciar sua própria
                loja digital com todas as ferramentas necessárias para o seu
                sucesso.
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
        {/*-----------------------------------------------------------------------------------------------*/}
      </div>
    </div>
  );
}
