import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function Security() {
  return (
    <div>
      <h1 className="text-xl font-semibold">Segurança</h1>
      <main>
        <form className="mt-4 flex flex-col gap-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="password">
              <AccordionTrigger className="my-5 flex w-full items-center justify-between text-left text-base font-medium">
                Mudar palavra-passe{" "}
                <ChevronDown className="size-5 text-muted-foreground" />
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-3">
                <fieldset className="flex flex-col gap-3">
                  <Label htmlFor="oldPassword">Antiga palavra-passe</Label>
                  <Input placeholder="" id="oldPassword" type="password" />
                </fieldset>
                <fieldset className="flex flex-col gap-3">
                  <Label htmlFor="newPassword">Nova palavra-passe</Label>
                  <Input placeholder="" id="newPassword" type="password" />
                </fieldset>
                <fieldset className="flex flex-col gap-3">
                  <Label htmlFor="confirmPassword">
                    Confirmação palavra-passe
                  </Label>
                  <Input placeholder="" id="confirmPassword" type="password" />
                </fieldset>
                <Button>Mudar palavra-passe</Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="pin">
              <AccordionTrigger className="my-5 flex w-full items-center justify-between text-left text-base font-medium">
                Mudar o pin
                <ChevronDown className="size-5 text-muted-foreground" />
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-3">
                <fieldset className="flex flex-col gap-3">
                  <Label htmlFor="oldPin">Antigo pin</Label>
                  <Input placeholder="" id="oldPin" type="number" />
                </fieldset>
                <fieldset className="flex flex-col gap-3">
                  <Label htmlFor="newPin">Novo pin</Label>
                  <Input placeholder="" id="newPin" type="number" />
                </fieldset>
                <fieldset className="flex flex-col gap-3">
                  <Label htmlFor="confirmPin">Confirmação do pin</Label>
                  <Input placeholder="" id="confirmPin" type="number" />
                </fieldset>
                <Button>Mudar pin</Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </form>
        {/* <Separator className="my-4" /> */}
      </main>
    </div>
  );
}
